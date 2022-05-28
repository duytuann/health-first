package com.springboot.userservice.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRoleDto {
    private String username;
    private Integer roleId;
}
