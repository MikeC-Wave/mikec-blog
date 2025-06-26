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

### 8. ScrollVideo

Auto-playing video component that triggers playback when scrolled into view using the Intersection Observer API.

**Props:**
- `src` (required): Video source URL
- `title` (optional): Video title displayed above
- `description` (optional): Video description
- `poster` (optional): Thumbnail image
- `autoplay` (optional): Enable auto-play on scroll - Default: `true`
- `loop` (optional): Loop video playback - Default: `true`
- `muted` (optional): Mute video by default - Default: `true`
- `controls` (optional): Show native video controls - Default: `false`
- `threshold` (optional): Intersection threshold (0-1) - Default: `0.5`
- `rootMargin` (optional): Observer root margin - Default: `'0px'`
- `playOnlyWhenVisible` (optional): Pause when out of view - Default: `true`
- `size` (optional): `'sm' | 'md' | 'lg' | 'xl' | 'full'` - Default: `'lg'`
- `position` (optional): `'left' | 'right' | 'center'` - Default: `'center'`

**Usage:**
```mdx
<ScrollVideo 
  src="/videos/demo.mp4" 
  title="Feature Demo"
  description="Watch this quick demonstration of the new feature in action."
  poster="/videos/demo-poster.jpg"
  size="xl"
/>

<ScrollVideo 
  src="/videos/tutorial.mp4"
  autoplay={false}
  controls={true}
  position="left"
  size="md"
/>
```

### 9. VideoDemo

Enhanced video component with type-specific styling, custom controls, and rich visual effects for professional presentations.

**Props:**
- `src` (required): Video source URL
- `type` (required): `'demo' | 'tutorial' | 'feature' | 'comparison'` - Affects styling and branding
- `title` (optional): Video title with enhanced typography
- `description` (optional): Video description with rich formatting
- `poster` (optional): Thumbnail image
- `size` (optional): `'sm' | 'md' | 'lg' | 'xl' | 'full'` - Default: `'lg'`
- `position` (optional): `'left' | 'right' | 'center' | 'float-left' | 'float-right'` - Default: `'center'`
- `autoplay` (optional): Enable auto-play - Default: `true`
- `loop` (optional): Loop video playback - Default: `true`
- `muted` (optional): Mute video by default - Default: `true`
- `controls` (optional): Show native vs custom controls - Default: `false`
- `caption` (optional): Caption text below video
- `playOnScroll` (optional): Enable scroll-triggered playback - Default: `true`
- `threshold` (optional): Intersection threshold for scroll trigger - Default: `0.5`

**Type-Specific Styling:**
- **Demo**: Blue gradient with 🎬 icon
- **Tutorial**: Green gradient with 🎓 icon  
- **Feature**: Purple gradient with ⚡ icon
- **Comparison**: Orange/red gradient with ⚖️ icon

**Usage:**
```mdx
<VideoDemo 
  type="demo"
  src="/videos/product-demo.mp4"
  title="Product Demo"
  description="See our latest features in action with this comprehensive demonstration."
  poster="/videos/demo-poster.jpg"
  caption="Demo recorded with the latest version"
  size="xl"
/>

<VideoDemo 
  type="tutorial"
  src="/videos/how-to-guide.mp4"
  title="Step-by-Step Tutorial"
  description="Learn how to implement this feature with our detailed tutorial."
  position="float-right"
  size="md"
/>

<VideoDemo 
  type="feature"
  src="/videos/feature-showcase.mp4"
  title="New Feature Showcase"
  autoplay={false}
  controls={true}
/>

<VideoDemo 
  type="comparison"
  src="/videos/before-after.mp4"
  title="Before vs After Comparison"
  description="See the dramatic improvements in performance and user experience."
  caption="Performance metrics shown are from real-world testing"
/>
```

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