package main

import (
	"fmt"
	"strconv"
)

// Define person struct
type Person struct {
	firstname string
	lastname  string
	city      string
	gender    string
	age       int
	//	firstname, lastname, city, gender string
	//	age int
}

// Greeting method (value reciever)
func (p Person) greet() string {
	return "Hello, my name is " + p.firstname + p.lastname + ", I am " + strconv.Itoa(p.age)
}

// hasBirthday method (poinyer reciever)
func (p *Person) hasBirthday() {
	p.age++
}

// getMarried (pointer reciever)
func (p *Person) getMarried(spouseLastname string) {
	if p.gender == "M" {
		return
	} else {
		p.lastname = spouseLastname
	}
}

func main() {
	//	Init person using struct
	person1 := Person{
		firstname: "Zaza",
		lastname:  "Neno",
		city:      "Madrid",
		gender:    "M",
		age:       28,
	}

	//	Alternative
	person2 := Person{"Samantha", "Carlo", "san francisco", "F", 26}

	fmt.Println(person1, person2)

	fmt.Println(person1.city)
	person1.age++
	fmt.Println(person1)

	person2.getMarried(person1.lastname)
	person2.hasBirthday()
	fmt.Println(person2.greet())
}
