package com.snkc.security.filters;

import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.security.providers.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    LoginRepository loginRepo;

//    private static String getJwtFromRequest(MyRequestWrapper request) throws IOException {
//        String body = request.getBody();
//        ObjectMapper objectMapper = new ObjectMapper();
//        JsonNode root = objectMapper.readTree(body);
//        var jwt = root.path("jwt").asText();
//        return jwt;
//    }

    private static String getJwtFromRequest(HttpServletRequest request)
    {
        final String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (header == null || header.isEmpty()) {
            return "";
        }

        // Get jwt token and validate
        return header.split(" ")[1].trim();
    }

    private static String getAuthorization(HttpServletRequest request)
    {
        final String header = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (header == null || header.isEmpty()) {
            return "";
        }
        return header;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        // Get user identity and set it on the spring security context
        //MyRequestWrapper myRequestWrapper = new MyRequestWrapper(request);
        // Get jwt token and validate

//        final String token = getJwtFromRequest(request);
//        if (token == null || token.isEmpty())
//        {
//            chain.doFilter(request, response);
//            return;
//        }
        //TODO 临时使用UserID作为校验
//        final var userID = getUserIDFromRequestHeader(request);
        final var authorization = getAuthorization(request);

//        try {
//            userID = jwtTokenProvider.getUsernameFromJWT(token);
//        } catch (ExpiredJwtException expiredJwtException)
//        {
//            logger.warn("jwt is expired!!!!" + token);
//            chain.doFilter(request, response);
//            return;
//        } catch (UnsupportedJwtException unsupportedJwtException)
//        {
//            logger.error("unsupported jwt exception, token=" + token);
//            chain.doFilter(request, response);
//            return;
//        } catch (MalformedJwtException malformedJwtException)
//        {
//            logger.error("malformedJwtException, token=" + token);
//            chain.doFilter(request, response);
//            return;
//        } catch (SignatureException signatureException)
//        {
//            logger.error("SignatureException, token=" + token);
//            chain.doFilter(request, response);
//            return;
//        }
//        catch(IllegalArgumentException illegalArgumentException)
//        {
//            logger.error("IllegalArgumentException, token=" + token);
//            chain.doFilter(request, response);
//            return;
//        }
        if (authorization.isEmpty())
        {
            logger.error("error authorization, Not Found" );
            chain.doFilter(request, response);
            return;
        }
        var userByToken = loginRepo.findUserByToken(authorization);
        if (userByToken.isEmpty())
        {
            logger.error("authorization=" + authorization + " not found!!!");
            chain.doFilter(request, response);
            return;
        }
        User user = userByToken.get();
        String userID = user.getId();
        request.setAttribute("userID", userID);
        UserDetails userDetails = userDetailsService.loadUserByUsername(userID);

        UsernamePasswordAuthenticationToken
                authentication = new UsernamePasswordAuthenticationToken(
                userDetails, null,
                userDetails.getAuthorities()
        );

        authentication.setDetails(
                new WebAuthenticationDetailsSource().buildDetails(request)
        );


        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);
    }
}
