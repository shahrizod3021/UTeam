package it.team.uteam.Repository;

import it.team.uteam.Entity.Projects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface ProjectRepository extends JpaRepository<Projects, Integer> {
}
