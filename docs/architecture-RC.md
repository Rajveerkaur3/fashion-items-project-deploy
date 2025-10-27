# Architecture Document – R.C.

This document explains the hook-service-repository pattern used in the Newsletter feature.



## 1. NewsletterRepository
# What it does  
- Handles all subscriber data: fetch all and add new subscribers.

# Logic and separation 
- Only manages data storage, not UI or business rules.  
- Uses test data to simulate a backend for development.

# Usage in project
- Called by NewsletterService whenever subscriber data is needed or updated.


## 2. NewsletterService
# What it does
- Implements business rules for newsletter subscriptions (e.g., prevent duplicates).  
- Acts as a bridge between repository and UI logic.

# Logic and separation  
- Encapsulates business rules only.  
- Does not handle UI state or direct data storage.

# Usage in project  
- Used by the useNewsletter hook to apply business rules before updating UI state.


## 3. useNewsletter Hook
# What it does 
- Manages UI state for newsletter subscribers: list, messages, and subscribe action.  
- Provides a subscribe(email) function for components.

# Logic and separation  
- Handles presentation logic only  
- Calls NewsletterService for business logic.  
- Does not directly access repository.

# Usage in project. 
- Used in the Newsletter component for subscribing users and showing messages.  
- Can be reused in other components needing newsletter state.

This keeps the code clean, reusable, and easy to maintain.
