package it.team.uteam.Service;

import it.team.uteam.Repository.AuthRepository;
import it.team.uteam.Repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService implements UserDetailsService {

    private final AuthRepository authRepository;




    @Autowired
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    public UserDetails getUserById(UUID id) {
        return authRepository.findById(id).get();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return authRepository.findUserByPhoneNumber(username).get();
    }

}
