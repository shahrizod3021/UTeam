package it.team.uteam.Repository;

import it.team.uteam.Entity.Messages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface MessageRepo extends JpaRepository<Messages, Integer> {
    boolean existsMessagesByNameEqualsIgnoreCase(String name);
}
