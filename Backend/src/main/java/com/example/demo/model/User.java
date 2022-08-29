package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.lang.ClassCastException;
import java.util.Collection;
import java.util.List;


@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    private String email;
    @NotBlank
    private String password;

    public User(){

    }
    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public void setUsername(String email) {
        this.email = email;
    }

    public void setPassword(String name) {
        this.password = password;
    }

    @Override
    public boolean equals(Object obj) {
        User tmp;
        try {
            tmp = (User) obj;
        }catch (ClassCastException e){
            return false;
        }
        if(this.email.equals(tmp.getUsername()) &&
                this.password.equals(tmp.getPassword())){
            return true;
        }
        return false;

    }

    @Override
    public String toString() {
        return "User{" +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(() -> "read");
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
