firstName; lastName; address; city; state; zip; phoneNumber; email;

//constructor
constructor ( firstName, lastName, address, city, state, zip, phoneNumber, email ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

//setter and getter method
 setfirstName( firstName )
  {
    this.firstName = firstName;
}

 getfirstName() 
 {
    return this.firstName;
}

 setlastName( lastName )
  {
    this.lastName = lastName;
}

 getlastName() 
 {
    return this.lastName;
}

 setaddress( address )
  {
    this.address = address;
}

 getaddress()
  {
    return this.address;
}

 setcity( city )
  {
    this.city = city;
}

 getcity() 
 {
    return this.city;
}

 setstate( state )
  {
    this.state = state;
}

getstate()
 {
    return this.state;
}

setzip( zip ) 
{
    this.zip = zip;
}

getzip()
 {
    return this.zip;
}

setphoneNumber( phoneNumber )
 {
    this.phoneNumber = phoneNumber;
}

getphoneNumber()
 {
    return this.phoneNumber;
}

setemail( email )
 {
    this.email = email;
}

getemail()
 {
    return this.email;
}

//method
toString()
 {
    return "firstName = " +this.firstName + ", lastName = " +this.lastName + ", address = " +this.address + ", city = " +this.city +
                            ", state = " +this.state + ", zip = " +this.zip + ", phoneNumber = " +this.phoneNumber + ", email = " +this.email;
}


//exporting the class file to another class
module.exports = PersonInformation;
