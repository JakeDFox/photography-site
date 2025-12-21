---
layout: default
title: Gallery
description: Browse our photography portfolio
---

<section class="section">
    <div class="container">
        <h2>Full Gallery</h2>
        <div class="photo-grid">
            {% for i in (1..12) %}
            <div class="photo-item">
                <img src="https://via.placeholder.com/400x300/{{ site.data.colors[i] | default: '2c3e50' }}/ffffff?text=Gallery+{{ i }}" alt="Gallery Photo {{ i }}" loading="lazy">
                <div class="photo-overlay">
                    <h5>Photo {{ i }}</h5>
                    <p>Beautiful photography</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

