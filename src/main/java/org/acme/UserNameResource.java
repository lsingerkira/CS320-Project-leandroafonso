package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import java.util.List;

@Path( "/user")
public class UserNameResource {

// Create
@POST
@Path( "/{name}")
@Produces(MediaType.TEXT_PLAIN)
@Transactional
public String createUser(@PathParam( "name" ) String name) {
    UserName userName = new UserName(name);
    userName.persist();
    return "Hello " + name + "! Your name has been stored in the database.";
    }

 // Get
 @GET
 @Produces(MediaType.APPLICATION_JSON)
 public List<UserName> getNames(){
    return UserName.listAll();
 }

// Update
 @PATCH
 @Path("/{id}")
 @Produces(MediaType.TEXT_PLAIN)
 @Transactional
 public String updateName(@PathParam("id") String id, String newName) {
    UserName userName = UserName.findById(id);
    String oldName = userName.name;
    userName.name = newName;
    return "'" + oldName + "' has been updated to '" + newName + "' in the database.";
    }

// Delete
@DELETE
@Path("/{id}")
@Produces(MediaType.TEXT_PLAIN)
@Transactional
public String deleteName(@PathParam("id") String id) {
    UserName userName = UserName.findById(id);
    userName.delete();
    return userName.name + " has been deleted from the database.";
    }
}
