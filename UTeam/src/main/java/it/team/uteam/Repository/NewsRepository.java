package it.team.uteam.Repository;

import it.team.uteam.Entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News, Integer> {
}
