package com.revature.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "USERS")
public class Users implements Serializable{

	public Users() {
		super();
	}

	public Users(GameStates gameStates, String email, String password, String firstName, String lastName,
			String username, String isHost) {
		super();
		this.gameStates = gameStates;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.isHost = isHost;
	}

	public Users(int user_Id, GameStates gameStates, String email, String password, String firstName, String lastName,
			String username, String isHost) {
		super();
		this.user_Id = user_Id;
		this.gameStates = gameStates;
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.isHost = isHost;
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = -8695520349894932748L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSequence")
	@SequenceGenerator(allocationSize = 1, name = "userSequence", sequenceName = "SQ_USER_PK")
	@Column(name = "USER_ID")
	private int user_Id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "GAME_ID")
	private GameStates gameStates;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "PASSWORD")
	private String password;
	
	@Column(name = "FNAME")
	private String firstName;
	
	@Column(name = "LNAME")
	private String lastName;
	
	@Column(name = "USERNAME")
	private String username;
	
	@Column(name = "ISHOST")
	private String isHost;

	public int getUser_Id() {
		return user_Id;
	}

	public void setUser_Id(int user_Id) {
		this.user_Id = user_Id;
	}

	public GameStates getGameStates() {
		return gameStates;
	}

	public void setGameStates(GameStates gameStates) {
		this.gameStates = gameStates;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getIsHost() {
		return isHost;
	}

	public void setIsHost(String isHost) {
		this.isHost = isHost;
	}

	@Override
	public String toString() {
		return "Users [user_Id=" + user_Id + ", gameStates=" + gameStates + ", email=" + email + ", password="
				+ password + ", firstName=" + firstName + ", lastName=" + lastName + ", username=" + username
				+ ", isHost=" + isHost + "]";
	}
}
