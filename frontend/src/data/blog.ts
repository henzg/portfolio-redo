export type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    tags: string[];
    image?: string;
    readTime: string;
};

export const blogPosts: BlogPost[] = [
    {
        id: "opengl-learning-journey",
        title: "Starting My OpenGL Learning Journey",
        excerpt: "Beginning my dive into graphics programming with OpenGL and C++. From basic triangles to understanding the graphics pipeline.",
        content: `
# Starting My OpenGL Learning Journey

I've always been fascinated by how games render beautiful graphics in real-time. After working on web applications for a while, I decided it was time to dive deeper into the fundamentals of graphics programming.

## Why OpenGL?

OpenGL seemed like the perfect starting point because:
- It's widely used in the industry
- Great learning resources available
- Direct control over the graphics pipeline
- Excellent foundation for understanding modern graphics APIs

## First Steps

My journey began with setting up a basic OpenGL environment using GLFW for window management and GLAD for loading OpenGL functions. The first milestone was rendering a simple triangle - something that took much more code than I expected!

## Key Learnings So Far

1. **Graphics Pipeline Understanding**: Learning about vertex shaders, fragment shaders, and how data flows through the GPU
2. **Coordinate Systems**: Understanding the difference between normalized device coordinates and world coordinates
3. **Buffer Objects**: Getting familiar with VBOs and VAOs for efficient data management

## Next Steps

I'm planning to explore:
- Texture mapping
- Lighting and shading
- 3D transformations
- Model loading

This is just the beginning, but I'm excited to see where this journey takes me!
        `,
        date: "2024-01-15",
        tags: ["OpenGL", "C++", "Graphics Programming", "Learning"],
        readTime: "3 min read"
    },
    {
        id: "pong-game-development",
        title: "Building PONG from Scratch with SFML",
        excerpt: "Recreating the classic PONG game using SFML. A great project for learning game development fundamentals.",
        content: `
# Building PONG from Scratch with SFML

After getting comfortable with OpenGL basics, I wanted to build something more interactive. What better than recreating one of the most iconic games ever made?

## Why SFML?

I chose SFML for this project because:
- Simple and intuitive API
- Great for 2D games
- Excellent documentation
- Cross-platform support

## Project Structure

The game consists of several key components:
- **Game Loop**: Handling input, updating game state, and rendering
- **Paddle Class**: Managing player and AI paddle movement
- **Ball Class**: Physics and collision detection
- **Score System**: Tracking points and game state

## Challenges Faced

1. **Collision Detection**: Implementing accurate ball-paddle collision with proper angle calculation
2. **AI Behavior**: Creating challenging but fair AI opponent
3. **Game State Management**: Handling menu, gameplay, and game over states

## Key Features Implemented

- Smooth paddle movement with acceleration and deceleration
- Realistic ball physics with speed increases over time
- Simple AI that follows the ball with some prediction
- Score display and win conditions
- Pause functionality

## Lessons Learned

This project taught me a lot about:
- Game loop design patterns
- State management in games
- Simple physics implementation
- User input handling

## Future Improvements

I'm considering adding:
- Sound effects
- Power-ups
- Multiple difficulty levels
- Multiplayer support

This project was incredibly rewarding and gave me confidence to tackle more complex game development challenges.
        `,
        date: "2024-02-10",
        tags: ["SFML", "C++", "Game Development", "PONG"],
        readTime: "5 min read"
    },
    {
        id: "unreal-engine-rts-camera",
        title: "Developing an RTS Camera System in Unreal Engine 5",
        excerpt: "Creating a custom camera system for real-time strategy games in UE5. Exploring C++ and Blueprint integration.",
        content: `
# Developing an RTS Camera System in Unreal Engine 5

After working with lower-level graphics APIs, I wanted to experience the power of a modern game engine. Unreal Engine 5 seemed like the perfect choice for building an RTS game prototype.

## Why Unreal Engine 5?

UE5 offers incredible features for RTS development:
- Advanced rendering with Nanite and Lumen
- Robust networking capabilities
- Excellent C++ integration
- Powerful Blueprint system for rapid prototyping

## Camera System Design

The RTS camera system I'm developing includes:

### Core Features
- **Smooth Movement**: Camera follows mouse at screen edges
- **Zoom Functionality**: Smooth zoom in/out with mouse wheel
- **Rotation**: Camera rotation around a focal point
- **Boundary Constraints**: Preventing camera from going out of bounds

### Technical Implementation

I'm using a combination of C++ and Blueprints:
- **C++ Classes**: For core camera logic and performance-critical operations
- **Blueprints**: For easy tweaking of camera parameters and integration with UI

## Challenges and Solutions

1. **Smooth Movement**: Implemented interpolation for camera movement to avoid jerky motion
2. **Zoom Constraints**: Added min/max zoom limits to maintain playability
3. **Performance**: Optimized camera updates to run efficiently at 60+ FPS

## Learning Outcomes

This project has taught me:
- UE5's C++ framework and conventions
- Blueprint-C++ integration patterns
- Game camera design principles
- Performance optimization in game engines

## Next Steps

I'm planning to expand this into a full RTS prototype with:
- Unit selection and movement
- Basic AI for units
- Resource management system
- Multiplayer foundation

The combination of UE5's power and my growing C++ skills is opening up exciting possibilities for game development!
        `,
        date: "2024-03-05",
        tags: ["Unreal Engine 5", "C++", "RTS", "Game Development"],
        readTime: "4 min read"
    }
]; 