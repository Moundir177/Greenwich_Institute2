import os
import requests
import time

def download_image(url, save_path):
    """Download an image from the URL and save it to the given path."""
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        with open(save_path, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
                
        print(f"Downloaded: {save_path}")
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def main():
    # Create directories if they don't exist
    directories = [
        "public/images/avatars",
        "public/images/courses",
        "public/testimonials",
        "public/images"
    ]
    
    for directory in directories:
        os.makedirs(directory, exist_ok=True)
    
    # Hero image
    hero_image_url = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
    download_image(hero_image_url, "public/images/hero-image.jpg")
    
    # Student campus image
    campus_image_url = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"
    download_image(campus_image_url, "public/images/students-campus.jpg")
    
    # Avatar images for hero section
    avatar_urls = [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
    ]
    
    for i, url in enumerate(avatar_urls, 1):
        download_image(url, f"public/images/avatars/student-{i}.jpg")
        time.sleep(0.5)  # Be nice to the server
    
    # Course images
    course_urls = [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",  # Business Management
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",    # Data Science
        "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop", # Digital Marketing
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"  # Web Development
    ]
    
    course_names = [
        "business-management.jpg",
        "data-science.jpg",
        "digital-marketing.jpg",
        "web-development.jpg"
    ]
    
    for url, name in zip(course_urls, course_names):
        download_image(url, f"public/images/courses/{name}")
        time.sleep(0.5)  # Be nice to the server
    
    # Testimonial images
    testimonial_urls = [
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=150&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=150&auto=format&fit=crop"
    ]
    
    for i, url in enumerate(testimonial_urls, 1):
        download_image(url, f"public/testimonials/student{i}.jpg")
        time.sleep(0.5)  # Be nice to the server
    
    print("All images downloaded successfully!")

if __name__ == "__main__":
    main() 