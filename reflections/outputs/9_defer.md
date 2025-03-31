conversations are complicated, there's a cadence in candor opening and closing points to each

begun and ended with a recognition of humanity

grace not found on either end can leave the converser a lost sense of connection

entering and leaving each conversation it's good to recognize the humanity in an individual

deferring is a concept in go which allows you to ensure something is run regardless of what happens be sure to have that function called with the correct arguments


```go
package main

import (
	"context"
	"fmt"
	"time"
)

func conversation(ctx context.Context, intent string,
	openMessage func(string),
	closeMessage func(string)) error {

	openMessage(intent)

	defer closeMessage(intent)

	workDone := make(chan struct{})
	go func() {
		fmt.Println("  [Worker]: Starting work on:", intent)
		time.Sleep(2 * time.Second)
		fmt.Println("  [Worker]: Finished work on:", intent)
		close(workDone)
	}()

	select {
	case <-ctx.Done():
		return ctx.Err()
	case <-workDone:
		return nil
	}
}

func main() {
	opening := func(intent string) {
		fmt.Printf("Hey how are you?\n")
		fmt.Printf("Opening conversation about \"%s\".\n", intent)
	}

	closing := func(intent string) {
		fmt.Printf("Closing conversation about \"%s\".\n", intent)
		fmt.Println("Have a good day!")
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	fmt.Println("[Main]: Starting conversation…")
	if err := conversation(ctx, "watch repair", opening, closing); err != nil {
		fmt.Printf("[Main]: Conversation ended early due to: %v\n", err)
		return
	}

	fmt.Println("[Main]: Conversation completed successfully.")
}
```