# Architecture Overview – Jaskomal Kaur

##  Hook: useReviews
**What it does:**  
Manages the logic for getting, adding, and deleting customer reviews.

**Why it’s separate:**  
Separating review logic from components keeps code clean and reusable.  
The hook handles data updates so components can focus on display.

**Where it’s used:**  
Used inside `CustomerReviews.tsx` to fetch and update review data in real-time.

---

## Service: reviewService
**What it does:**  
Handles the app’s connection between the UI and the repository.  
It prepares the data before sending or after receiving it.

**Why it’s separate:**  
This keeps logic for transforming data or handling small business rules out of the UI.  

**Where it’s used:**  
Used by `useReviews` hook to send requests and receive data properly formatted.

---

##  Repository: reviewRepository
**What it does:**  
Stores and retrieves data (for example, from an API or local storage).

**Why it’s separate:**  
Separating repositories allows you to change data sources later (like switching from local storage to a backend) without breaking other code.

**Where it’s used:**  
Called inside `reviewService`, which connects to the hook and the component.
