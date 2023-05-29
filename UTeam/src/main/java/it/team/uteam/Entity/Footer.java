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
public class Footer extends AbsNameEntity {

    private String link;

    private String icon;
}
