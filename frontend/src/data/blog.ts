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
    },
    {
        id: "camera-zoom-implementation",
        title: "Implementing Smooth Camera Zoom in Unreal Engine 5",
        excerpt: "A detailed breakdown of implementing zoom in/out functionality with smooth transitions using curves and input actions.",
        content: `
# Implementing Smooth Camera Zoom in Unreal Engine 5

Building on my RTS camera system, I've successfully implemented smooth zoom in and out functionality. This feature is crucial for RTS games, allowing players to get both tactical close-up views and strategic overviews of the battlefield.

## Input System Setup

The foundation of the zoom system starts with proper input configuration:

### Input Actions Created
- **IA_ZoomIn**: Digital Bool action for zooming in
- **IA_ZoomOut**: Digital Bool action for zooming out  
- **IA_ZoomReset**: Digital Bool action for resetting zoom to default
- **LeftCtrlModifier**: Digital Bool modifier for chorded actions

### Input Mapping
All actions are mapped through the **IMC_CameraMove** input mapping context, with the reset action configured as a chorded action using the LeftCtrlModifier for intuitive control.

## Smooth Zoom with Curve Assets

To achieve natural-feeling zoom transitions, I created a **Float Curve** asset:

### Curve Configuration
- **Key Points**: (0, 1350) and (1, 300)
- **Curve Type**: Cubic with flat tangents
- **Purpose**: Maps zoom input (0-1) to camera arm length (300-1350)

This curve provides smooth interpolation between zoom levels, avoiding the jarring linear transitions that can make camera movement feel robotic.

## Blueprint Implementation

### BP_TopDownCamera
The camera blueprint contains the core zoom logic:

**SetArmLength(float ZoomAmount)**
- Uses the CurveZoomLength to evaluate the zoom amount
- Applies the result to the Camera Boom's Target Arm Length
- This creates the actual zoom effect by adjusting the camera distance

### BP_PawnMovementComp
The movement component handles zoom state management:

**ZoomIn()**
- Increments DeltaZoomAmount using Lerp for smooth transitions
- Updates the ZoomAmount variable
- Calls SetArmLength on the CameraPawnRef with the new value

**ZoomOut()**
- Decrements DeltaZoomAmount using Lerp
- Updates ZoomAmount
- Calls SetArmLength similarly

**ResetZoom()**
- Resets DeltaZoomAmount to 0.5 (the midpoint of our curve)
- Provides a quick way to return to the default view

**ZoomEvents()**
- Centralized function called each tick
- Applies the current zoom state
- Designed to handle future camera features like panning and POV changes

## Player Controller Integration

The **BP_PlayerController** maps the input actions to their respective functions:
- IA_ZoomIn → ZoomIn()
- IA_ZoomOut → ZoomOut()
- IA_ZoomReset → ResetZoom()

This creates a clean separation between input handling and camera logic.

## Runtime Updates

The system calls **ZoomEvents()** from the Event Tick in BP_PawnMovementComp, ensuring that zoom changes are applied in real-time. This approach allows for smooth, responsive camera control that feels natural to players.

## Technical Benefits

This implementation provides several advantages:
- **Smooth Transitions**: The curve-based approach eliminates jarring camera movements
- **Scalable Design**: The centralized ZoomEvents function can easily accommodate additional camera features
- **Performance Optimized**: Efficient updates that don't impact frame rate
- **User-Friendly**: Intuitive controls with reset functionality

## Future Enhancements

With this foundation in place, I'm planning to add:
- Zoom speed customization
- Zoom bounds based on map size
- Smooth camera panning
- Camera rotation around focal points

This zoom system forms a solid foundation for the complete RTS camera experience!
        `,
        date: "2024-03-20",
        tags: ["Unreal Engine 5", "Blueprints", "Camera System", "RTS", "Game Development"],
        readTime: "6 min read"
    },
    {
    id: "opengl-renderer-update",
    title: "Building My Own OpenGL Renderer",
    excerpt: "It's been awhile since my last update! I've shifted gears from 3D experiments to creating my own OpenGL renderer with tests for 2D and 3D rendering.",
    content: `
# Building My Own OpenGL Renderer

It's been awhile since my last update! I've still been working on projects behind the scenes, but my focus has shifted from general 3D experiments to something I've wanted to tackle for a while — building my own renderer from scratch.

## Where Things Stand

Right now, I've got a working renderer that can handle some simple but exciting tests:
- **2D Shapes**: Rendering basic primitives like triangles and squares
- **3D Cube**: A test scene with a cube that I can spin around
- **ImGui Integration**: A menu system that lets me switch between these different test cases

It might not sound like much at first glance, but wiring everything together — the pipeline, buffers, shaders, and UI — has been a big step forward. It's starting to feel like a real tool I can build on.

## What's Next

I'm setting my sights on a few ambitious goals:
- **Lighting**: Adding real-time lighting to bring more depth and realism to the scenes
- **Ray Tracing**: I want to dive into this sooner rather than later, even if it's just a basic prototype to start with
- **More Features**: Things like textures, camera controls, and expanded test scenes are all on the roadmap

## Why This Matters

For me, this project is about more than just drawing shapes. It's about understanding the building blocks of graphics programming at a deeper level. Each new feature teaches me something about how real engines work under the hood.

I'll keep sharing updates as I make progress, and hopefully soon I'll have some cool lighting demos and early ray tracing experiments to show off. Thanks for following along with this journey — it's only just getting started!
    `,
    date: "2025-09-02",
    tags: ["OpenGL", "C++", "Renderer", "Graphics Programming", "Dev Log"],
    readTime: "4 min read"
}
]; 
