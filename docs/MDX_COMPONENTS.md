# MDX Components Documentation

This document provides comprehensive guidance on using the custom MDX components available in blog posts. These components enhance the standard Markdown experience with interactive and visually appealing elements.

## Available Components

### 1. CalloutBox

Highlight key insights, warnings, success messages, and notes with visual callout boxes.

**Props:**
- `type` (optional): `'success' | 'warning' | 'info' | 'note' | 'error'` - Default: `'info'`
- `title` (optional): Custom title for the callout
- `class` (optional): Additional CSS classes

**Usage:**
```mdx
<CalloutBox type="warning" title="Important Note">
This is a warning message that readers should pay attention to.
</CalloutBox>

<CalloutBox type="success">
Great job! This feature is working perfectly.
</CalloutBox>

<CalloutBox type="info" title="Pro Tip">
Here's a helpful tip to improve your workflow.
</CalloutBox>
```

### 2. ProcessStep

Display numbered visual steps for workflows and processes.

**Props:**
- `number` (required): Step number or identifier
- `title` (required): Step title
- `class` (optional): Additional CSS classes

**Usage:**
```mdx
<ProcessStep number="1" title="Install Dependencies">
First, install the required packages using npm or yarn.

```bash
npm install @astrojs/mdx
```
</ProcessStep>

<ProcessStep number="2" title="Configure Astro">
Add the MDX integration to your Astro configuration file.
</ProcessStep>
```

### 3. StatsGrid

Display metrics and statistics in an organized grid layout.

**Props:**
- `columns` (optional): `2 | 3 | 4` - Number of grid columns - Default: `3`
- `class` (optional): Additional CSS classes

**Usage:**
```mdx
<StatsGrid columns={3}>
  <div class="stat-item">
    <div class="stat-number">12+</div>
    <div class="stat-label">Years Experience</div>
    <div class="stat-description">Government contracting</div>
  </div>
  
  <div class="stat-item">
    <div class="stat-number">50+</div>
    <div class="stat-label">Projects Completed</div>
    <div class="stat-description">Enterprise solutions</div>
  </div>
  
  <div class="stat-item">
    <div class="stat-number">100%</div>
    <div class="stat-label">Client Satisfaction</div>
    <div class="stat-description">Proven track record</div>
  </div>
</StatsGrid>
```

**CSS Classes for Stats:**
- `stat-item`: Container for each statistic
- `stat-number`: Large number display
- `stat-label`: Label text
- `stat-description`: Additional description

### 4. CodeDemo

Interactive code examples with syntax highlighting and copy functionality.

**Props:**
- `title` (optional): Demo title
- `language` (optional): Programming language - Default: `'javascript'`
- `filename` (optional): Filename to display
- `showLineNumbers` (optional): Show line numbers - Default: `false`
- `class` (optional): Additional CSS classes

**Usage:**
```mdx
<CodeDemo 
  title="React Component Example" 
  language="jsx" 
  filename="Button.jsx"
  showLineNumbers={true}
>
import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button 
      className="px-4 py-2 bg-blue-600 text-white rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
</CodeDemo>
```

### 5. TechStack

Display technology stacks and tools with visual badges.

**Props:**
- `title` (optional): Section title - Default: `'Tech Stack'`
- `class` (optional): Additional CSS classes

**Usage:**
```mdx
<TechStack title="Frontend Technologies">
  <span class="tech-badge tech-badge-primary">React</span>
  <span class="tech-badge tech-badge-secondary">TypeScript</span>
  <span class="tech-badge tech-badge-success">Tailwind CSS</span>
  <span class="tech-badge">Astro</span>
  <span class="tech-badge tech-badge-warning">Vite</span>
</TechStack>
```

**Badge Classes:**
- `tech-badge`: Default badge style
- `tech-badge-primary`: Blue badge
- `tech-badge-secondary`: Gray badge
- `tech-badge-success`: Green badge
- `tech-badge-warning`: Yellow badge
- `tech-badge-danger`: Red badge

### 6. ResourceCard

Link to external resources with rich previews and metadata.

**Props:**
- `title` (required): Resource title
- `url` (required): Resource URL
- `description` (optional): Resource description
- `type` (optional): `'article' | 'video' | 'tool' | 'course' | 'book' | 'github' | 'docs'` - Default: `'article'`
- `author` (optional): Resource author
- `image` (optional): Resource image URL
- `class` (optional): Additional CSS classes

**Usage:**
```mdx
<ResourceCard
  title="Astro Documentation"
  url="https://docs.astro.build"
  description="The official Astro documentation with guides, API reference, and examples."
  type="docs"
  author="Astro Team"
/>

<ResourceCard
  title="Building Modern Web Applications"
  url="https://example.com/course"
  description="Learn to build fast, modern web applications with the latest technologies."
  type="course"
  author="John Doe"
  image="/course-thumbnail.jpg"
/>
```

### 7. SimpleVideo

A lightweight video component that plays once when scrolled into view with a replay button. Perfect for quick demonstrations and tutorials.

**Props:**
- `src` (required): Video source URL
- `title` (optional): Video title displayed above

**Usage:**
```mdx
<SimpleVideo 
  src="/videos/quick-demo.mp4"
  title="Quick Setup Demo"
/>

<SimpleVideo 
  src="/videos/feature-preview.mp4"
/>
```

**Features:**
- Auto-plays when scrolled into view (50% visible)
- Plays only once per page load
- Shows replay button when video ends
- Muted by default for autoplay compatibility
- Responsive design with rounded corners and shadow
- Works with Astro view transitions
- Minimal overhead and simple implementation

### 8. XEmbed

Embed X (Twitter) posts using the official X oEmbed API for authentic rendering with full functionality.

**Props:**
- `url` (required): X post URL
- `theme` (optional): `'light' | 'dark'` - Default: `'light'`
- `maxwidth` (optional): Maximum width in pixels
- `hide_media` (optional): Hide media attachments - Default: `false`
- `hide_thread` (optional): Hide thread context - Default: `false`
- `align` (optional): `'left' | 'center' | 'right'` - Default: `'left'`

**Usage:**
```mdx
<XEmbed 
  url="https://x.com/username/status/1234567890"
  theme="light"
  maxwidth={500}
  align="center"
/>

<XEmbed 
  url="https://x.com/username/status/1234567890"
  theme="dark"
  hide_media={true}
/>
```

**Features:**
- Uses official X oEmbed API for authentic rendering
- Loads X widgets.js for full interactivity
- Supports all X post types (text, images, videos, threads)
- Configurable appearance options
- Error handling with fallback links
- Respects user's theme preferences

## Best Practices

### 1. Component Composition
Combine components for rich content experiences:

```mdx
<CalloutBox type="info" title="Learning Path">
Follow these steps to master modern web development:

<ProcessStep number="1" title="Master the Fundamentals">
Start with HTML, CSS, and JavaScript basics.
</ProcessStep>

<ProcessStep number="2" title="Learn a Framework">
Choose React, Vue, or Svelte based on your needs.
</ProcessStep>

<TechStack title="Recommended Tools">
  <span class="tech-badge tech-badge-primary">React</span>
  <span class="tech-badge tech-badge-success">TypeScript</span>
  <span class="tech-badge">Vite</span>
</TechStack>
</CalloutBox>
```

### 2. Responsive Design
All components are designed to be responsive. Use appropriate column counts for different screen sizes:

```mdx
<StatsGrid columns={2}>
  <!-- Better for mobile readability -->
</StatsGrid>
```

### 3. Accessibility
Components include proper ARIA labels and semantic HTML. Always provide:
- Descriptive titles for ProcessStep components
- Alt text for images in ResourceCard components
- Meaningful content in CalloutBox components

### 4. Performance
- Use appropriate image sizes for ResourceCard components
- Keep CodeDemo examples concise
- Limit the number of components per page for optimal loading

## Styling Customization

All components support custom CSS classes via the `class` prop. You can override default styles or add custom styling:

```mdx
<CalloutBox type="info" class="my-custom-callout border-2">
Custom styled callout box.
</CalloutBox>
```

## Component Hierarchy

Components are designed to work well together:
- Use CalloutBox as a container for other components
- Combine ProcessStep components for workflows
- Use StatsGrid to showcase metrics
- Include ResourceCard components for external references
- Use CodeDemo for technical examples
- Display TechStack for project technologies

This creates engaging, informative blog posts that provide value to readers while maintaining visual consistency and professional appearance. 