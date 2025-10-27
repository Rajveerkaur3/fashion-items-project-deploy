# Architecture Overview – Jaskomal Kaur

##  Hook: useReviews
### What it does: 
Takes care of the logic of obtaining, adding, and removing customer reviews.

### Why it’s separate:
The code invariability and reusability are maintained by decoupling review logic and components.
The hook manages the updates of data in order to enable components to concentrate on display

## Where it’s used:  
Repeatedly called in CustomerReviews.tsx to get review data and update in real-time.

## Service: reviewService
### What it does: 
Deals with the connection of the app between the UI and the repository.
It gets data ready to send it or ready to receive.

### Why it’s separate:  
This excludes logic of the transformation of the data or small business logic out of the UI 

### Where it’s used: 
useReviews are used to make requests and receive data in their correct form.

##  Repository: reviewRepository
### What it does:
Retrieves and stores data (such as API or a local storage).

### Why it’s separate:
The benefit of keeping repositories separate is that later on you can switch between data repositories (such as local storage versus a backend) and it will not have a negative impact on other code.

### Where it’s used: 
Hooked to the hook and the component, called by reviewService.
