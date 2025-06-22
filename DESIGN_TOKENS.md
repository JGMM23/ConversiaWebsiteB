# Conversia AI Design Tokens

This document outlines the comprehensive design token system implemented for Conversia AI's website to ensure consistency across all components and facilitate future maintenance.

## Color System

### Brand Colors
- **Primary**: `#4F2582` (Purple) - Main brand color for headers, primary elements
- **Primary Light**: `#6e35b5` - Lighter variant for gradients and hover states
- **Primary Dark**: `#3d1d65` - Darker variant for emphasis
- **Secondary**: `#B64621` (Reddish Brown) - CTAs, buttons, highlights
- **Secondary Light**: `#d4572b` - Lighter variant for gradients
- **Secondary Dark**: `#8a3318` - Darker variant for pressed states

### Neutral Scale
- **50**: `#FAFAFA` - Light backgrounds
- **100**: `#F5F5F5` - Subtle backgrounds
- **200**: `#E5E5E5` - Borders, dividers
- **300**: `#D4D4D4` - Disabled elements
- **400**: `#A3A3A3` - Placeholder text
- **500**: `#737373` - Secondary text
- **600**: `#525252` - Body text
- **700**: `#404040` - Strong text
- **800**: `#262626` - Dark backgrounds
- **900**: `#171717` - Highest contrast text

### Semantic Colors
- **Success**: `#16A34A` - Success states, confirmations
- **Warning**: `#F59E0B` - Warnings, cautions
- **Error**: `#EF4444` - Errors, destructive actions
- **Info**: `#3B82F6` - Information, links

## Typography Scale

### Font Sizes
- **xs**: 12px - Small annotations, badges
- **sm**: 14px - Small text, captions
- **base**: 16px - Body text, default
- **lg**: 18px - Large body text, subtitles
- **xl**: 20px - Small headings
- **2xl**: 24px - Section headings
- **3xl**: 30px - Page subtitles
- **4xl**: 36px - Main headings
- **5xl**: 48px - Hero headings
- **6xl**: 60px - Display headings

### Line Heights
- **tight**: 1.25 - Headlines, tight spacing
- **snug**: 1.375 - Subheadings
- **normal**: 1.5 - Default body text
- **relaxed**: 1.625 - Comfortable reading
- **loose**: 2 - Spacious layouts

## Spacing Scale

Based on 4px increments for consistent spacing:

- **1**: 4px - Fine adjustments
- **2**: 8px - Small gaps
- **3**: 12px - Default gaps
- **4**: 16px - Standard spacing
- **5**: 20px - Medium spacing
- **6**: 24px - Large spacing
- **8**: 32px - Section spacing
- **10**: 40px - Large sections
- **12**: 48px - Page sections
- **16**: 64px - Major sections
- **20**: 80px - Section padding
- **24**: 96px - Large section padding
- **32**: 128px - Extra large spacing

## Border Radius

- **none**: 0 - Sharp corners
- **sm**: 2px - Subtle rounding
- **base**: 4px - Default rounding
- **md**: 6px - Medium rounding
- **lg**: 8px - Card rounding
- **xl**: 12px - Large elements
- **2xl**: 16px - Very rounded
- **full**: 9999px - Perfect circles

## Shadows

Progressive shadow system for depth:

- **sm**: Subtle elevation
- **base**: Default cards
- **md**: Elevated cards
- **lg**: Modal dialogs
- **xl**: Maximum elevation

## Component Classes

### Cards
- `.card` - Base card styling with consistent padding, border, and shadow
- `.card-hover` - Adds hover effects with elevation and transform

### Buttons
- `.btn-primary` - Primary brand button with gradient
- `.btn-secondary` - Secondary CTA button with gradient

### Layout
- `.section-padding` - Standard section vertical padding (80px/96px)
- `.section-padding-sm` - Small section padding (48px/64px)
- `.section-padding-lg` - Large section padding (96px/128px)

### Typography
- `.text-large` - 18px text for subtitles
- `.text-small` - 14px text for captions

## Usage Guidelines

### Color Usage
1. Use primary colors for brand elements and navigation
2. Use secondary colors for CTAs and important actions
3. Use neutral colors for text hierarchy
4. Use semantic colors for state indication

### Typography Hierarchy
1. H1: Hero headings (48px)
2. H2: Section headings (36px)
3. H3: Subsection headings (24px)
4. H4: Component headings (20px)
5. Body: Regular text (16px)
6. Large: Subtitle text (18px)

### Spacing Consistency
- Use spacing scale for all margins, padding, and gaps
- Maintain consistent vertical rhythm
- Use larger spacing for section separation

### Component Consistency
- Use card classes for all content blocks
- Use button classes for all interactive elements
- Apply hover states consistently

## Implementation

All design tokens are implemented as CSS custom properties in `client/src/index.css` and integrated with Tailwind CSS configuration in `tailwind.config.ts`. This ensures:

1. **Consistency**: All components use the same design values
2. **Maintainability**: Changes to design tokens propagate throughout the system
3. **Scalability**: Easy to add new tokens or modify existing ones
4. **Performance**: CSS custom properties provide efficient styling
5. **Developer Experience**: Clear naming conventions and utilities

## Dark Mode Support

The design token system includes dark mode variants for all colors, ensuring accessibility and user preference support.