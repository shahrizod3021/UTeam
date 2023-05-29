package it.team.uteam.Component;

import it.team.uteam.Entity.Enums.RoleName;
import it.team.uteam.Entity.Role;
import it.team.uteam.Entity.User;
import it.team.uteam.Repository.AuthRepository;
import it.team.uteam.Repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Configuration
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {

    private final PasswordEncoder passwordEncoder;

    private final AuthRepository authRepository;

    private final RoleRepository roleRepo;


    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String init;


    @Override
    public void run(String... args) throws Exception {
        if (init.equals("create-drop") || init.equals("create")) {
            for (RoleName value : RoleName.values()) {
                roleRepo.save(new Role(value));
            }
            Role role = roleRepo.findById(2).get();
            authRepository.save(
                    new User(
                            "shahrizod",
                            "mirzaaliyev",
                            "980009792",
                            passwordEncoder.encode("0009792"),
                            role
                    ));
        }
    }
}
