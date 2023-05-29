package it.team.uteam.Repository;

import it.team.uteam.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;
import java.util.UUID;

@CrossOrigin
public interface AuthRepository extends JpaRepository<User, UUID> {
    Optional<User> findUserByPhoneNumber(String phoneNumber);

    boolean existsUserByPhoneNumber(String phoneNumber);
}
