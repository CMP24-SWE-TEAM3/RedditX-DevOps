package main

import "fmt"

func main() {
	a := 5
	b := &a //	pointer to a

	fmt.Println(a, b)
	fmt.Printf("%T - %T\n", a, b)

	//	Use * to derefernce the address
	fmt.Println(*b)
	fmt.Println(*&a)

	//	change value with ptr
	*b = 10
	fmt.Println(a, b)
}
