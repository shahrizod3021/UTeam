package it.team.uteam.Entity;

import it.team.uteam.Entity.AbsEntity.AbsNameEntity;
import lombok.*;

import javax.persistence.Entity;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Projects extends AbsNameEntity {

    private UUID photoId;

    private String link;

    private String description;

    private String who;
}
