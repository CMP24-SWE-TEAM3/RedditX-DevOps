package main

import "fmt"

func main() {
	//	Define map
	/*
		emails := make(map[string]string)

		//	Assign kv
		emails["zaza"] = "zaza@yahoo.com"
		emails["nano"] = "nano@yahoo.com"
		emails["Mike"] = "mike@yahoo.com"
	*/
	//	Declare & Add kv
	emails := map[string]string{
		"zaza": "zaza@yahoo.com",
		"nano": "nano@yahoo.com",
	}
	emails["Mike"] = "mike@yahoo.com"

	fmt.Println(emails)
	fmt.Println(len(emails))
	fmt.Println(emails["zaza"])

	//	Delete from map
	delete(emails, "zaza")
	fmt.Println(emails)
}
