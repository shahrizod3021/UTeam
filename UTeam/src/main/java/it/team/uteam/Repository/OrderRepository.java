package it.team.uteam.Repository;

import it.team.uteam.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface OrderRepository extends JpaRepository<Order,Integer> {

}
