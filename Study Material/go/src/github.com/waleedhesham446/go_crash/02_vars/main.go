package main

import "fmt"

var globalVar = "GLOBAL"

func main() {
	// { string, bool, int, int8...int64, uint, uint8...uint64, byte=uint8, rune=int32, float32, float64, complex64, complex128 }

	//	Using var
	var firstname string = "Waleed"
	var lastname = "Hesham"

	var age int = 22
	var gradYear = 2024

	const isCool = true
	// isCool = false

	fmt.Println(firstname, lastname, isCool)
	fmt.Println(age, gradYear)
	fmt.Printf("%T - %T - %T \n", firstname, age, isCool)

	//	Using Shorthand
	name := "Waleed Hesham Hussein"
	//	size := 1.4 //	default => float64
	var size float32 = 1.4

	fmt.Println(name, size)
	fmt.Printf("%T - %T\n", name, size)

	email, password := "waleed.hesham@twerlo.com", "asdfghjkl"
	fmt.Println(email, password)
}
