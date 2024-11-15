package com.snkc.security.userDetails;

import com.snkc.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private LoginRepository loginRepo;
    @Override
    public UserDetails loadUserByUsername(String userID) throws UsernameNotFoundException {
        var userById = loginRepo.findById(userID);
        if (!userById.isPresent())
        {
            throw new UsernameNotFoundException("Invalid Username " + userID);
        }
        return new UserDetailModel(userById.get());
    }
}
