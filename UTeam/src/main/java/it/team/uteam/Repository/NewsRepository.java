package it.team.uteam.Repository;

import it.team.uteam.Entity.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface NewsRepository extends JpaRepository<News, Integer> {
}
