package main

import (
	"fmt"
	"strconv"
	"syscall/js"
)

func printMessage(this js.Value, inputs []js.Value) interface{} {
	message := inputs[0].String()

	document := js.Global().Get("document")
	p := document.Call("createElement", "p")
	p.Set("innerHTML", message)
	return document.Get("body").Call("appendChild", p)
}

func add(this js.Value, args []js.Value) interface{} {
	ret := 0

	for _, item := range args {
		val, _ := strconv.Atoi(item.String())
		ret += val
	}

	return ret
}

func main() {
	fmt.Println("Initializing go-code")
	c := make(chan bool)

	js.Global().Set("__gobridge__", map[string]interface{}{
		"printMessage": js.FuncOf(printMessage),
		"add":          js.FuncOf(add),
	})

	<-c
}
