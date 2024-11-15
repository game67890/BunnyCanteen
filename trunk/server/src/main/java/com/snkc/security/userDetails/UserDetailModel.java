package com.snkc.security.userDetails;

import com.snkc.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class UserDetailModel implements UserDetails {
    private String userID;
    private int identity = 0; // 0 game player, 1 gm
    private int status = 0; // 0 normal, 1 banned
    private List<GrantedAuthority> authorities = new ArrayList<>();
    public UserDetailModel(User user)
    {
        userID = user.getId();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return userID;
    }
}
