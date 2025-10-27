# Team Architecture – Key Hooks and Services

## 1. useToggle Hook

**What does it do?**  
Manages toggling UI states, such as showing or hiding elements (e.g., forms, modals, sections).

**Logic and Separation of Concerns:**  
- Handles only presentation logic, not business or data access.  
- Makes UI behavior reusable across components, preventing duplicated toggle logic.  

**Where is it used?**  
- `Login.tsx` – toggling password visibility.  
- `CustomerReviews.tsx` – toggling review form or sections.

---

## 2. AppService

**What does it do?**  
Provides business logic for tracking application-wide metrics:  
- Counts total interactions on the Landing Page.  
- Counts total reviews submitted on Customer Reviews page.

**Logic and Separation of Concerns:**  
- Handles only **business logic**, separating metrics calculation from UI components.  
- Keeps reusable logic centralized, so components only call the service for data.  

**Where is it used?**  
- `LandingPage.tsx` – counts user interactions.  
- `CustomerReviews.tsx` – counts total reviews submitted.
