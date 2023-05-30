package it.team.uteam.Repository;

import it.team.uteam.Entity.Footer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface FooterRepo extends JpaRepository<Footer,Integer> {
    boolean existsFooterByNameEqualsIgnoreCase(String name);
    boolean existsCategoryByNameEqualsIgnoreCaseAndIdNot(String name, Integer id);

    boolean findFooterById(Integer id);
}
