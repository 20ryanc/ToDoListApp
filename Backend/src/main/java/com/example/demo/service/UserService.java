package com.example.demo.service;

import com.example.demo.dao.EntryRepository;
import com.example.demo.dao.UserRepository;
import com.example.demo.model.Entry;
import com.example.demo.model.Entrytmp;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService implements UserDetailsService {
    private UserRepository userRepository;
    private EntryRepository entryRepository;

    @Autowired
    public UserService(UserRepository userRepository, EntryRepository entryRepository) {
        this.userRepository = userRepository;
        this.entryRepository = entryRepository;
    }

    public Optional<User> getUser(String email){
        return userRepository.findById(email);
    }

    public void addUser(User user){
        if(userRepository.findById(user.getUsername()).isEmpty()){
            userRepository.save(user);
        }else{
            throw new DuplicateKeyException("User Already Exists");
        }
    }

    public void removeUser(String email){
        userRepository.deleteById(email);
    }

    public List<Entry> getAllEntry(String email){
        return entryRepository.findAllEntry(email);
    }

    public void deleteAllEntry(String email){
        entryRepository.deleteAllEntry(email);
    }

    public void insertEntry(Entry entry){
        entryRepository.save(entry);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> usr = userRepository.findById(username);
        if(usr.isEmpty()){
            throw new UsernameNotFoundException("User not present");
        }
        return usr.get();
    }
}
