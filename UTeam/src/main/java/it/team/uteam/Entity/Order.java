package it.team.uteam.Entity;

import it.team.uteam.Entity.AbsEntity.AbsNameEntity;
import lombok.*;

import javax.persistence.Entity;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Order extends AbsNameEntity {
    private String lastName;
    private String phoneNumber;
    private String email;
    private String why;
    private String companyName;

}
