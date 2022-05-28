package com.springboot.userservice.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "role", uniqueConstraints = {
        @UniqueConstraint(name = "uni_role", columnNames = "name")
})
public class AppRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    private String name;

    // @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    // @JoinTable(
    // name = "app_role_permission",
    // joinColumns = @JoinColumn(name = "role_id"),
    // inverseJoinColumns = @JoinColumn(name = "permission_id")
    // )
    // private Set<AppPermission> permissions = new HashSet<>();
}
