# 🔥 JavaScript, Everything about Everything Syllabus – Phase 2: DOM, Events, Forms, Storage

---

## 🌐 1. The DOM (Document Object Model)
- ✅ Teach:
  - DOM Tree structure: node, element, text, comment
  - Selecting elements: getElementById, getElementsByClassName, querySelector, querySelectorAll
  - Text/content access: innerText, textContent, innerHTML
  - Attribute manipulation: getAttribute, setAttribute, removeAttribute
  - Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend
  - Style updates via .style and classList (add, remove, toggle)
- ⚠️ Confusion:
  - Difference between innerText vs textContent vs innerHTML
  - Live HTMLCollection vs static NodeList
- 🧠 Mindset:
  - DOM is the page’s brain – use it responsibly
- 🧪 Practice:
  - Build dynamic list from array
  - Add/remove todo from UI on button click

---

## 🖱️ 2. Events and Event Handling
- ✅ Teach:
  - Event binding: addEventListener, removeEventListener
  - Common events: click, input, change, submit, mouseover, keyup
  - Event object: target, type, preventDefault
  - Event bubbling and capturing
  - Event delegation
- ⚠️ Confusion:
  - event.target vs event.currentTarget
  - Capturing phase vs bubbling phase
- 🧠 Mindset:
  - Don’t bind events everywhere, delegate smartly
- 🧪 Practice:
  - Live character counter
  - Delegated event handler on todo list

---

## 📝 3. Forms and Form Validation
- ✅ Teach:
  - Reading values from input, textarea, select
  - Prevent default submission
  - Inline and JS-based validation
  - Showing error messages conditionally
  - Pattern attribute vs custom regex
- ⚠️ Confusion:
  - Difference between value and textContent
  - Form submission vs button click
- 🧠 Mindset:
  - Forms are for communication – sanitize and validate deeply
- 🧪 Practice:
  - Email/password validator
  - Interactive feedback form with error highlights

---

## 🕐 4. Timers and Intervals
- ✅ Teach:
  - setTimeout, clearTimeout
  - setInterval, clearInterval
  - Real use: delaying UI actions, auto-refresh
- ⚠️ Confusion:
  - setInterval vs setTimeout recursion
- 🧠 Mindset:
  - Time creates rhythm in user experience
- 🧪 Practice:
  - Countdown timer
  - Auto-hide alert banner after 3s

---

## 📦 5. LocalStorage, SessionStorage, and Cookies
- ✅ Teach:
  - localStorage API: setItem, getItem, removeItem, clear
  - sessionStorage API
  - Storing/retrieving strings vs JSON
  - Basic cookie structure (manual key=value;path=/ format)
- ⚠️ Confusion:
  - Why only strings work in localStorage
  - Cookies need manual encoding/expiration handling
- 🧠 Mindset:
  - Use localStorage for state, cookies for cross-tab auth
- 🧪 Practice:
  - Save theme preference in localStorage
  - Login form that remembers user’s name using storage

---

## 🧪 Bonus Practice Project Ideas for Phase 2
- 🎯 DOM Interactivity:
  - Todo App (add/delete/edit)
  - Accordion / collapsible FAQ
- 🎯 Event Handling:
  - Real-time search filter
  - Custom dropdown menu
- 🎯 Form Management:
  - Survey form with multiple fields and validation
- 🎯 Storage Integration:
  - Notes App (save text to localStorage)
  - Dark mode toggle saved across sessions