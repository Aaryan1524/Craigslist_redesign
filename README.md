# Craigslist Redesign – Human-Computer Interaction (HCI) Project

## Overview
This repository contains a modern, interactive prototype redesign of Craigslist, built as a project for a Human-Computer Interaction (HCI) class. The core objective of this project is to reimagine the Craigslist user experience—transitioning it from a dense, overwhelming text-based directory into a clean, modern, and accessible application while retaining its core functionality of connecting buyers and sellers locally.

## Why is this Redesign Better? (HCI Principles)

The original Craigslist is famous for its barebones design. While functional, it suffers from severe usability and cognitive load issues. This redesign addresses those pain points using established HCI principles:

### 1. Reduced Cognitive Load & Visual Hierarchy
* **Classic Feature**: An overwhelming wall of blue text links.
* **Redesign Solution**: We introduced card-based UI layouts and generous whitespace. Categories are now grouped into large, legible, and touch-friendly buttons (`Community`, `Housing`, `Services`, etc.). This creates a clear visual hierarchy that guides the user's eye effortlessly and reduces the time it takes to parse information.

### 2. Streamlined Search & Filtering
* **Classic Feature**: Basic text search that often requires reading through individual posts to verify specific metrics (like RAM or laptop condition).
* **Redesign Solution**: Added a dedicated, persistent left-hand sidebar for parametric filtering. Instead of relying on boolean queries, users can interact with familiar UI dropdowns (Condition, Brand, Storage Capacity, etc.). This aligns with the "Recognition over Recall" heuristic, allowing users to select parameters rather than typing them from memory.

### 3. Trust and Safety Signals
* **Classic Feature**: Anonymous postings with no immediate visual verification.
* **Redesign Solution**: Integrated clear, color-coded badges (`Verified` vs `Not Verified`) directly on search result cards. Providing immediate visual feedback regarding a seller's reputation heavily influences decision-making and fosters trust, directly improving the user experience.

### 4. Direct, Contextual Communication
* **Classic Feature**: An outdated, disjointed email relay system for communication.
* **Redesign Solution**: Built a modern, split-pane integrated messaging inbox. It keeps track of threads dynamically. More importantly, it provides **contextual memory**—alongside the seller's name, the UI explicitly shows the item being discussed (e.g., `Apple Macbook pro 13"`), solving the working-memory burden of users who contact multiple sellers simultaneously.

### 5. Accessibility and Typography
* **Classic Feature**: System fonts with cramped line spacing.
* **Redesign Solution**: Implemented a modern sans-serif typeface (`Montserrat`) with clear sizing scales and strong foreground/background contrast. This improves readability significantly for visually impaired users and modernizes the interface for mobile and desktop screens.

## Project Structure
* `index.html` - The modernized homepage with a hero banner and category grid.
* `search.html` - The search results page demonstrating parametric filtering sidebars and item cards.
* `details.html` - A streamlined product overview page focusing on specs, large imagery, and clear Call-to-Actions.
* `messages.html` - The app-like split-pane communication interface for tracking buyer/seller chats.
