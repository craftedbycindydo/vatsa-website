// Portfolio data for Dr. Vatsa S. Patel
export const portfolioData = {
  personal: {
    name: "Vatsa Patel, Ph.D.",
    title: "Assistant Professor of Computer Science", 
    subtitle: "PhD in Computer Science | AI & Computer Vision Expert | 13+ Published Papers | Driving Innovation in Machine Learning & Data Science",
    institution: "Penn State Harrisburg",
    location: "United States",
    email: "patelvatsa09@gmail.com",
    linkedin: "https://www.linkedin.com/in/vatsa-patel",
    github: "https://github.com/VatsaPatel9",
    googleScholar: "https://scholar.google.com/citations?user=RIIfg4gAAAAJ&hl=en&oi=ao",
    cv: "/Vatsa_Patel_Resume.pdf",
    website: "",
    bio: "I am an Assistant Professor of Computer Science at Penn State Harrisburg, where I specialize in artificial intelligence, machine learning, and computer vision. I earned my Ph.D. in Computer Science from the University of Dayton, and my work is driven by a passion for bridging cutting-edge research with practical impact.\n\nMy research focuses on solving real-world challenges through AI, spanning areas such as anomaly detection, autonomous systems, signal processing, generative AI, and multimodal learning. I have developed machine learning solutions for diverse domains including traffic monitoring, biomedical systems, UAV signal processing, real estate analytics, and quantum-enhanced learning.\n\nI often integrate deep learning, generative models, and multimodal analysis to build robust, scalable solutions. Alongside research, I am deeply committed to mentoring students, fostering innovation, and advancing projects that push the boundaries of AI while addressing complex societal and industry challenges.",
    image: "/vatsa-profile.jpg", // Placeholder - will be updated after scraping
  },
  
  education: [
    {
      degree: "Ph.D. in Computer Science",
      institution: "University of Dayton",
      location: "Dayton, Ohio",
      year: "2021 - 2024",
      gpa: "3.8/4.0",
      specialization: "Artificial Intelligence, Machine Learning, Computer Vision"
    },
    {
      degree: "Master of Science, Computer Science",
      institution: "University of Dayton",
      location: "Dayton, Ohio",
      year: "2019 - 2021",
      gpa: "3.9/4.0",
      specialization: "Artificial Intelligence, Machine Learning, Computer Vision"
    }
  ],

  experience: [
    {
      title: "Assistant Professor of Computer Science",
      company: "Penn State Harrisburg",
      location: "Harrisburg, Pennsylvania, United States",
      period: "Aug 2025 - Present",
      logo: "/penn-state-logo.jpg",
      description: "Full-time academic position focusing on computer science education and research.",
      responsibilities: [
        "Teaching and mentoring undergraduate and graduate students in computer science, with focus on AI, machine learning, and data structures.",
        "Leading research initiatives in computer vision, generative AI, and multimodal learning.",
        "Contributing to the academic community through publications, grant proposals, and student supervision."
      ],
      type: "academic"
    },
    {
      title: "Machine Learning Associate",
      company: "University of Dayton Research Institute",
      location: "Dayton, Ohio, United States",
      period: "Jan 2025 - Aug 2025",
      logo: "/UDRI_logo.png",
      description: "Full-time research position in machine learning and AI applications.",
      responsibilities: [
        "Developing ML algorithms for UAVs and dynamic systems with real-time control. Additionally, exploring applications in biomedical science, specifically modeling amino acids and proteins using PySCF and quantum chemistry techniques.",
        "Designing modular signal processing pipelines in Python for efficient data preprocessing, inference, and visualization across domains.",
        "Building interactive UI/UX frameworks to streamline dataset selection, model execution, and result visualization."
      ],
      type: "research"
    },
    {
      title: "Research Intern",
      company: "University of Dayton Research Institute",
      location: "Dayton, Ohio, United States",
      period: "May 2024 - Aug 2024",
      logo: "/UDRI_logo.png",
      description: "Intern in the Lab of Autonomous Systems engaged in cutting-edge research and software development in quantum computing and algorithms.",
      responsibilities: [
        "Led the development of advanced signal processing models, improving accuracy by 10% while reducing noise interference.",
        "Designed and optimized Bayesian neural networks for signal extraction, integrating with quantum machine learning (QML) frameworks to enhance denoising performance.",
        "Delivered the project on time and within budget, leveraging Python, MATLAB, and Qiskit to ensure efficient development and full compliance with project requirements."
      ],
      type: "research"
    },
    {
      title: "Graduate Assistant",
      company: "University of Dayton",
      location: "Dayton, Ohio, United States",
      period: "August 2021 – May 2024",
      logo: "/UD_logo.png",
      description: "Facilitating lab sessions to offer graduate students hands-on experience in advanced programming and data structures.",
      responsibilities: [
        "Facilitated lab sessions that provided graduate students with hands-on experience in advanced programming and data structures.",
        "Contributed to graduate-level teaching across multiple semesters, supporting courses such as Image Processing, Database Management Systems, and Algorithm Design.",
        "Fostered an interactive learning environment that connected advanced theory with practical applications, strengthening student expertise and research readiness."
      ],
      type: "academic"
    },
    {
      title: "Research Assistant",
      company: "University of Dayton",
      location: "Dayton, Ohio, United States",
      period: "February 2022 – August 2022",
      logo: "/UD_logo.png",
      description: "Research focused on weather condition simulation and object detection model evaluation.",
      responsibilities: [
        "Generated a 9,700-image dataset simulating adverse weather conditions (fog, rain, snow) using image processing libraries such as Imgaug and Albumentations.",
        "Evaluated and compared YOLO-based object detection models (e.g., YOLOv5x) for robustness across diverse weather scenarios.",
        "Enhanced traffic monitoring systems by improving resilience and accuracy of object detection under extreme conditions."
      ],
      type: "research"
    },
    {
      title: "Computer Vision Engineer & Entrepreneurial Lead",
      company: "I-Corps Hub Northeast Region Funded Research – University of Dayton",
      location: "Dayton, Ohio, United States",
      period: "May 2023 - Aug 2023",
      logo: "/Icorps.png",
      description: "Team 3097 | Traffic Analyzer for Visualization and Simulation | NSF Award #2324972",
      responsibilities: [
        "Served as Entrepreneurial Lead, conducting 100+ customer discovery interviews to identify stakeholder needs and validate market potential.",
        "Developed an AI-powered traffic analysis system using YOLOv5 for real-time vehicle detection across large-scale datasets.",
        "Optimized detection with a hyperplane-based counting method, enabling faster simulation integration and supporting data-driven urban planning."
      ],
      type: "entrepreneurial"
    },
    {
      title: "Machine Learning Researcher",
      company: "Silfex, Inc. – Division of Lam Research, in collaboration with University of Dayton",
      location: "Dayton, Ohio, United States",
      period: "October 2020 – July 2021",
      logo: "/Silfex_Logo.jpg",
      description: "Collaborated with the Silfex team to apply computer vision and machine learning for automating monitoring of Czochralski silicon growth machines.",
      responsibilities: [
        "Collaborated with the Silfex team to apply computer vision and machine learning for automating monitoring of Czochralski silicon growth machines.",
        "Developed a failure detection system with 80% accuracy across all seven production stages.",
        "Saved 168+ hours of manual monitoring by enabling real-time anomaly detection and automatic failure flagging for improved reliability."
      ],
      type: "research"
    }
  ],

  research: {
    interests: [
      "Artificial Intelligence",
      "Machine Learning", 
      "Computer Vision",
      "Anomaly Detection",
      "Autonomous Systems",
      "Signal Processing",
      "Generative AI",
      "Multimodal Learning"
    ],
    keywords: [
      "Deep Learning",
      "Neural Networks",
      "Object Detection",
      "Image Processing",
      "Traffic Analysis",
      "Weather Conditions",
      "Face Recognition",
      "Real Estate Analysis"
    ]
  },

  publications: [
    {
      title: "Towards safer roads: benchmarking object detection models in complex weather scenarios",
      authors: ["Ba-Thinh Tran-Le", "Vatsa S. Patel", "Viet-Tham Huynh", "Mai-Khiem Tran", "Kunal Agrawal", "Minh-Triet Tran", "Tam V. Nguyen"],
      year: "2025",
      venue: "Machine Vision and Applications",
      journal: "Machine Vision and Applications (Springer Nature)",
      type: "journal",
      link: "https://link.springer.com/article/10.1007/s00138-025-01234-5",
      doi: "https://doi.org/10.1007/s00138-025-01709-5",
      volume: "36",
      issue: "4",
      pages: "94",
      abstract: "This study evaluates the performance of various object detection models under challenging weather conditions such as fog, rain, and snow. The authors provide a comprehensive benchmark to assess the robustness of these models, aiming to enhance road safety in adverse weather scenarios for autonomous driving applications.",
      image: "/towards-safer-roads.png",
      keywords: ["Computer Vision", "Autonomous Driving", "Deep Learning", "Synthetic Dataset", "Weather Augmentation", "AI for Safety"],
      problem: "Modern autonomous vehicles rely on computer-vision systems that 'see' the world as cameras do. But when it rains, snows, or sunlight glares off a windshield, even the best object-detection algorithms can fail — mistaking a car for a bus or missing a pedestrian entirely. Collecting real-world data for every possible weather condition is nearly impossible and expensive.",
      motivation: "To make roads safer, the team asked: How can we train and test AI vision systems to stay reliable when the weather turns unpredictable?",
      method: {
        title: "ADCD: Adverse Driving Conditions Dataset",
        description: "The paper introduces the Adverse Driving Conditions Dataset (ADCD) — a large-scale synthetic dataset that recreates 12 realistic weather scenarios",
        scenarios: [
          "Rain, snow, haze, and sunset",
          "Nighttime glare",
          "Raindrops, cracked windshields, and sun flares",
          "Four mixed effects (e.g., haze + rain, night + haze)"
        ],
        techniques: [
          "Used GANs and diffusion models (CycleGAN-Turbo, InstructPix2Pix) for photorealistic augmentation",
          "Combined deep-learning synthesis with traditional rendering to preserve annotation accuracy",
          "Ensured positional integrity of all objects while altering only environmental effects"
        ]
      },
      evaluation: {
        models: "Benchmarked state-of-the-art detectors: YOLOv5–YOLOv11, DETR, Faster R-CNN, RetinaNet, SSD",
        metrics: "Assessed robustness via Precision, Recall, IoU, and mAP metrics across six object classes (car, truck, person, etc.)"
      },
      results: [
        "All models degraded significantly in adverse weather — up to 70% performance drop under mixed effects like haze + night",
        "YOLOv6-l6 and YOLOv5-x6 performed the most robustly overall",
        "Restoration models (e.g., SFNet, CORUN) improved hazy scenes but could not reach baseline accuracy",
        "Mixed conditions remain the hardest challenge — motivating adaptive, weather-aware perception systems"
      ],
      contributions: [
        "First comprehensive benchmark of object detection under 12 synthetic weather effects",
        "600,000+ augmented traffic images spanning global driving datasets (Udacity, ApolloScape, IDD, A2D2, DDD)",
        "Novel weather-synthesis pipeline blending generative AI with physics-based augmentation",
        "Insightful performance analysis revealing model-specific vulnerabilities (e.g., DETR instability under flare/night)",
        "Publicly available dataset & methodology to accelerate safe, robust autonomous-vision research"
      ],
      citation: "Tran-Le, B.T., Patel, V., Huynh, V.T., Tran, M.K., Agrawal, K., Tran, M.T. and Nguyen, T.V., 2025. Towards safer roads: benchmarking object detection models in complex weather scenarios. Machine Vision and Applications, 36(4), p.94.",
      technologies: {
        frameworks: ["PyTorch", "YOLO", "DETR", "TensorFlow"],
        generation: ["CycleGAN-Turbo", "InstructPix2Pix", "SAM", "DINO"],
        tools: ["OpenCV", "CUDA", "Matplotlib", "NumPy"],
        datasets: ["ADCD", "ApolloScape", "IDD", "A2D2"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "Image de-photobombing benchmark",
      authors: ["Vatsa S. Patel", "Kunal Agrawal", "Samah S. Baraheem", "Amira Yousif", "Tam V. Nguyen"],
      year: "2024",
      venue: "Multimedia Tools and Applications",
      journal: "Multimedia Tools and Applications (Springer Nature)",
      type: "journal",
      link: "https://www.researchgate.net/publication/379726524_Image_de-photobombing_benchmark",
      doi: "https://doi.org/10.1007/s11042-024-19102-1",
      volume: "83",
      issue: "29",
      pages: "73553-73568",
      abstract: "This paper introduces a benchmark dataset for the task of image de-photobombing, which involves removing unintended objects or people from photographs. The study evaluates ten state-of-the-art photobombing removal methods on a dataset of over 300 images, focusing on identifying the most effective image inpainting techniques for removing unwanted regions from images.",
      image: "/dephotobomb-cover.png",
      keywords: ["Image Inpainting", "Photobomb Removal", "Image Restoration", "Benchmark", "Deep Learning", "FID", "SSIM", "PSNR", "Computer Vision", "Dataset Creation"],
      problem: "Photographs capture moments meant to last forever — but a single photobomb can ruin the memory. From strangers walking into the frame to unintentional distractions, photobombing is an increasingly common challenge in the smartphone and social-media era. Traditional editing tools like Photoshop demand expertise and time. AI-based image inpainting now offers a way to restore these moments automatically — but which methods truly work best when the background, lighting, or subject composition varies?",
      motivation: "This study sets out to benchmark modern inpainting algorithms to determine which can most realistically and efficiently remove unwanted elements while preserving the integrity of the original image.",
      method: {
        title: "DPD-300: De-Photobombing Dataset",
        description: "The team introduces DPD-300, a comprehensive benchmark dataset designed for image de-photobombing with 300 photobombed images collected from public sources such as Facebook, Getty Images, Shutterstock, Adobe Stock, and Pinterest.",
        scenarios: [
          "Each image manually annotated using MATLAB's Region of Interest (ROI) tool to mark photobombed areas",
          "Professional photo editors created ground-truth cleaned versions for accurate evaluation",
          "Unlike the earlier DPD-150, which contained only human photobombers, DPD-300 includes both humans and objects",
          "Binary masks created to identify photobombed regions for inpainting algorithms"
        ],
        techniques: [
          "Ten classical and deep-learning–based inpainting algorithms tested: EBII, CT, FM, FD, CrFill, DeepFill v2, HiFill, RN, and TFill (coarse and refined)",
          "Each algorithm received the same image–mask pair and was compared against professional ground-truth output",
          "Consistent evaluation framework applied across all methods for fair comparison",
          "Analysis of performance on human vs non-human photobombing cases"
        ]
      },
      evaluation: {
        models: "Exemplar-Based Image Inpainting (EBII), Coherence Transport (CT), Fast Marching (FM), Fluid Dynamics (FD), CrFill, DeepFill v2, HiFill, Region Normalization (RN), TFill (coarse and refined)",
        metrics: "Fréchet Inception Distance (FID) for realism, Structural Similarity Index (SSIM) for visual similarity, Peak Signal-to-Noise Ratio (PSNR) for reconstruction fidelity"
      },
      results: [
        "Overall Benchmark: TFill-Refined achieved the best results across all metrics (FID = 36.48, SSIM = 0.939, PSNR = 28.09)",
        "TFill-Coarse followed closely, outperforming most classical methods",
        "Coherence Transport (CT) scored high on SSIM (0.936) but poorer on FID due to limited texture realism",
        "HiFill and DeepFill v2 showed inconsistent structure and visible artifacts on complex scenes",
        "Human vs Non-Human Performance: For human photobombing, TFill-Refined achieved FID = 64.63 and SSIM = 0.916",
        "For non-human distractions, the same model led again (FID = 115.24, SSIM = 0.930)",
        "Traditional methods (CT, FD, FM) performed competitively on small or simple masks",
        "Impact of Mask Size: As mask percentage increased, FID rose (lower realism) and SSIM/PSNR decreased, revealing difficulty in filling larger or complex missing regions"
      ],
      contributions: [
        "Development of DPD-300, a publicly available benchmark dataset with 300 photobombed images, binary masks, and professional ground truths",
        "Comprehensive evaluation of 10 classical and deep inpainting algorithms under consistent settings",
        "First systematic benchmark distinguishing human and non-human photobombing cases",
        "Discovery that TFill (Refined) leads in both fidelity and realism metrics across categories",
        "Insights into mask-size sensitivity and common failure cases (e.g., incomplete removal near subjects, poor reconstruction of text regions)",
        "Foundation for future research into more robust, high-fidelity image restoration methods"
      ],
      citation: "Patel, V.S., Agrawal, K., Baraheem, S.S., Yousif, A. and Nguyen, T.V., 2024. Image de-photobombing benchmark. Multimedia Tools and Applications, 83(29), pp.73553-73568.",
      technologies: {
        frameworks: ["MATLAB", "PyTorch", "OpenCV"],
        tools: ["MATLAB Image Processing Toolbox", "Adobe Photoshop", "MATLAB ROI Tool", "NVIDIA GPU"],
        datasets: ["DPD-300", "DPD-150"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "A Comprehensive Analysis of Object Detectors in Adverse Weather Conditions",
      authors: ["Vatsa S. Patel", "Kunal Agrawal", "Tam V. Nguyen"],
      year: "2024",
      venue: "58th Annual Conference on Information Sciences and Systems (CISS), IEEE",
      journal: "2024 58th Annual Conference on Information Sciences and Systems (CISS), IEEE",
      type: "conference",
      link: "https://par.nsf.gov/search/award_ids%3A2025234",
      doi: "https://doi.org/10.1109/CISS59072.2024.10480197",
      pages: "1-6",
      abstract: "This paper meticulously examines the robustness of computer vision object detection frameworks within real-world traffic scenarios, with particular emphasis on challenging adverse weather conditions. The investigation explores the nuanced performance of algorithms amidst adverse weather conditions like fog, rain, snow, sun flare, and more, acknowledging the substantial impact of weather dynamics on their precision.",
      image: "/comprehensive-cover.png",
      keywords: ["Adverse Weather Detection", "Object Detection", "Robustness Benchmark", "YOLO Models", "Computer Vision", "Traffic Surveillance", "Autonomous Driving", "Deep Learning", "Image Augmentation"],
      problem: "Autonomous vehicles and traffic-monitoring systems depend heavily on computer-vision models to detect and track objects. But real roads aren't clean laboratory conditions—rain, fog, snow, and glare can quickly turn high-accuracy models unreliable. Even the best detectors that perform perfectly in clear skies often break down in adverse weather, misidentifying vehicles or missing pedestrians entirely.",
      motivation: "This research investigates that blind spot: How do leading object detectors—especially the YOLO family—perform when visibility, lighting, and atmospheric conditions deteriorate? By systematically analyzing model performance across diverse weather effects, this work highlights the urgent need for weather-aware and resilient vision systems for autonomous driving and smart-city applications.",
      method: {
        title: "Urban Weather Diversity Dataset (UWDD)",
        description: "The study introduces a custom dataset called the Urban Weather Diversity Dataset (UWDD)—a large-scale benchmark designed to evaluate object-detection robustness under adverse conditions. Total of 9,700 images compiled from three well-known datasets: KITTI (Germany, 3,465 images), Udacity (USA, 3,353 images), and IDD (India, 3,182 images).",
        scenarios: [
          "Single effects: rain, fog, snow, sun flare, shadow",
          "Additive effects: fog + rain, fog + snow, sun flare + shadow",
          "Weather synthesis performed using imgaug and Albumentations libraries for photorealistic augmentation",
          "All models tested on seven common traffic classes (car, bus, truck, motorcycle, bicycle, train, person)"
        ],
        techniques: [
          "Eight YOLO-based detectors evaluated: YOLOv5n, YOLOv5x, YOLOv6l6, YOLOv6n6, YOLOv7, YOLOv7-e6e, YOLOv8n, and YOLOv8x",
          "Each model's output compared with annotated ground truth using Intersection-over-Union (IoU) metrics",
          "Tested under eight conditions: normal, fog, rain, snow, sun flare, shadow, and three additive combinations",
          "Performance trends analyzed both per condition and overall to determine consistency and model sensitivity"
        ]
      },
      evaluation: {
        models: "YOLOv5n, YOLOv5x, YOLOv6l6, YOLOv6n6, YOLOv7, YOLOv7-e6e, YOLOv8n, YOLOv8x",
        metrics: "IoU (Intersection over Union) for bounding-box overlap accuracy, Precision, Recall, and F1-score for quantitative detection metrics, plus qualitative visual assessment"
      },
      results: [
        "Top performer: YOLOv5x consistently achieved the highest IoU and overall accuracy across most weather conditions",
        "Weakest performer: YOLOv6n6 exhibited reduced robustness, struggling in rain, fog, and additive conditions",
        "All models performed reliably in shadow and mild sun-flare scenarios, where occlusion is minimal",
        "Combined weather effects (fog + rain, fog + snow) caused the steepest accuracy decline—showing up to 40–50% IoU drop compared to normal conditions",
        "The analysis emphasizes that even advanced detectors deteriorate sharply with increased occlusion and contrast loss"
      ],
      contributions: [
        "Developed and released Urban Weather Diversity Dataset (UWDD) containing 9,700 weather-augmented images for object-detection benchmarking",
        "Conducted the first systematic YOLO family comparison across eight versions under multiple single and combined weather effects",
        "Identified consistent degradation patterns in fog and snow environments, revealing model sensitivity to occlusion",
        "Demonstrated that YOLOv5x offers optimal accuracy–speed trade-off for traffic perception in real environments",
        "Provided actionable insights for designing weather-aware autonomous-vision models and preprocessing pipelines"
      ],
      citation: "Patel, V.S., Agrawal, K. and Nguyen, T.V., 2024, March. A Comprehensive Analysis of Object Detectors in Adverse Weather Conditions. In 2024 58th Annual Conference on Information Sciences and Systems (CISS) (pp. 1-6). IEEE.",
      technologies: {
        frameworks: ["PyTorch", "OpenCV", "imgaug", "Albumentations"],
        tools: ["COCO metrics", "NVIDIA GPU"],
        datasets: ["UWDD", "KITTI", "Udacity", "IDD"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          },
          {
            src: "/UD_logo.png",
            alt: "University of Dayton",
            label: "Graduate Student Summer Fellowship, University of Dayton"
          }
        ]
      }
    },
    {
      title: "An Initial Survey on Quantum Enhanced RF Signal Extraction in Cluttered Environments",
      authors: ["Vatsa S. Patel", "Zhenhua Jiang"],
      year: "2024",
      venue: "IEEE National Aerospace and Electronics Conference (NAECON)",
      journal: "2024 IEEE National Aerospace and Electronics Conference (NAECON)",
      type: "conference",
      link: "https://ieeexplore.ieee.org/document/10670345",
      doi: "https://doi.org/10.1109/NAECON61878.2024.10670345",
      pages: "136-141",
      abstract: "In modern communication networks—ranging from radio broadcasting and satellite links to IoT devices and radar—radio frequency (RF) signals are everywhere. Yet, in cluttered or noisy environments, overlapping signals and interference make it extremely difficult to isolate signals of interest accurately. This paper presents a comprehensive survey of existing RF signal extraction methods and introduces an initial hybrid framework combining Bayesian neural networks (BNNs) and quantum-inspired algorithms for denoising and extracting target signals in complex RF environments.",
      image: "/quantum-rf-cover.png",
      figures: [
        {
          src: "/quantum-rf-fig1.png",
          caption: "Illustration of the proposed RF signal extractor integrating Bayesian neural networks (BNNs) for uncertainty-aware denoising in cluttered environments.",
          section: "problem"
        },
        {
          src: "/quantum-rf-fig3.png",
          caption: "Architecture of the proposed Bayesian autoencoder showing encoder–decoder pathways for signal reconstruction.",
          section: "evaluation"
        }
      ],
      keywords: ["Quantum Machine Learning", "RF Signal Extraction", "Bayesian Neural Network", "Quantum Signal Processing", "Denoising Autoencoder", "Radio Frequency Interference", "Quantum Sensing", "Deep Learning"],
      problem: "In modern communication networks—ranging from radio broadcasting and satellite links to IoT devices and radar—radio frequency (RF) signals are everywhere. Yet, in cluttered or noisy environments, overlapping signals and interference make it extremely difficult to isolate signals of interest accurately. Traditional RF processing relies on classical filtering and signal processing, but these methods struggle when multiple frequencies overlap or when interference is nonlinear and dynamic.",
      motivation: "Recent advances in quantum sensing and quantum machine learning (QML) promise a paradigm shift. Quantum-enhanced systems can handle uncertainty more effectively, offering better sensitivity, precision, and computation speed. This paper presents a comprehensive survey of existing RF signal extraction methods and introduces an initial hybrid framework combining Bayesian neural networks (BNNs) and quantum-inspired algorithms for denoising and extracting target signals in complex RF environments.",
      method: {
        title: "Hybrid Quantum/Classical RF Signal-Processing Pipeline",
        description: "The proposed framework investigates a hybrid quantum/classical RF signal-processing pipeline integrating enhanced sensing, signal filtering, augmentation, classical deep learning, and quantum-enhanced computation to improve signal clarity and robustness.",
        scenarios: [
          "Enhanced Sensor Technologies: Uses Rydberg atom–based quantum sensors for ultra-sensitive RF field measurements, capturing both magnitude and phase of signals with minimal noise. Portable atomic magnetometers and co-designed RF sensing/communication modules enhance fidelity in low-frequency and congested bands.",
          "Signal Filtering: Employs Surface Acoustic Wave (SAW) and Bulk Acoustic Wave (BAW) filters along with modern variants (IHP-SAW, thin-film lithium niobate). Introduces CNN-based RF Region-of-Interest filtering for wideband spectrum sensing and hybrid matched-filter + neural architectures (HybNet) for adaptive interference suppression.",
          "Data Augmentation: Synthesizes realistic RF training datasets using GAN-based and kernel-density augmentation techniques. Simulates diverse channel and noise conditions to strengthen model robustness.",
          "Machine Learning Framework: Evaluates various ML paradigms (SVMs, CNNs, LSTMs, autoencoders) for RF fingerprinting, transmitter identification, and modulation classification. Proposes an autoencoder architecture using a Bayesian Neural Network (BNN) encoder combined with CNN, LSTM, or BNN decoders to manage uncertainty and enhance reconstruction accuracy. The BNN's probabilistic weights allow robust signal modeling, maintaining reliability in high-noise scenarios."
        ],
        techniques: [
          "Quantum-Enhanced Approaches: Surveys potential Quantum Fourier Transform (QFT) and Quantum Signal Processing (QSP) algorithms for faster feature extraction and denoising",
          "Explores Quantum Machine Learning (QML) methods for probabilistic inference, pattern detection, and classification in large-scale RF datasets",
          "Hybrid BNN autoencoder combining encoder–decoder pathways for signal reconstruction",
          "Case study using MIT's Single-Channel RF Challenge with electromagnetic interference (EMISignal1) and digital communication signals (CommSignal3)"
        ]
      },
      evaluation: {
        models: "BNN + CNN, BNN + LSTM, BNN + BNN autoencoder variants trained using MSE loss and Adam optimizer with early stopping",
        metrics: "R² coefficient of determination across different Gaussian noise levels (0.05 – 0.6 variance). Single-signal and multi-signal experimental setups tested on signals sampled at 25 MHz with frame length 4096 samples."
      },
      results: [
        "The BNN + BNN model consistently achieved the highest R² values across all Gaussian noise levels (0.98 → 0.92)",
        "BNN + CNN: R² = 0.95 → 0.87",
        "BNN + LSTM: R² = 0.96 → 0.88",
        "In multi-signal experiments, BNN + BNN maintained R² ≈ 0.94–0.95 for both real and imaginary components, confirming robust generalization",
        "Qualitative plots show that BNN + BNN reconstructions closely match ground-truth signals even under strong interference"
      ],
      contributions: [
        "Conducted a comprehensive survey of traditional, ML-based, and quantum-enhanced RF signal processing techniques",
        "Proposed a hybrid BNN autoencoder framework for uncertainty-aware RF denoising and extraction",
        "Demonstrated strong resilience to Gaussian and multi-signal interference through probabilistic learning mechanisms",
        "Identified and mapped emerging quantum algorithms (QFT, QSP, QML) for future integration",
        "Established a foundation for quantum-enhanced RF sensing and communication research across defense and civilian domains"
      ],
      citation: "Patel, V.S. and Jiang, Z., 2024. An Initial Survey on Quantum Enhanced RF Signal Extraction in Cluttered Environments. In 2024 IEEE National Aerospace and Electronics Conference (NAECON) (pp. 136-141). IEEE.",
      technologies: {
        frameworks: ["Python", "TensorFlow", "PyTorch"],
        neuralNetworks: ["BNN", "CNN", "LSTM", "Autoencoder architectures"],
        tools: ["SciPy", "NumPy", "Welch's method", "NVIDIA GPU", "IBM Qiskit", "Pennylane"],
        datasets: ["MIT Single-Channel RF Challenge", "SigMF dataset format"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/afrl.png",
            alt: "Air Force Research Laboratory",
            label: "Air Force Research Laboratory (AFRL)"
          },
          {
            src: "/darpa.png",
            alt: "DARPA",
            label: "Defense Advanced Research Projects Agency (DARPA)"
          },
          {
            src: "/ofrn.png",
            alt: "Ohio Federal Research Network",
            label: "Ohio Federal Research Network (OFRN) – Quantum Sensing"
          }
        ]
      }
    },
    {
      title: "Urban Traffic Planning Simulation with Time and Weather Dynamics",
      authors: ["Tam V. Nguyen", "Ngoc-Dat Thanh", "Viet-Tham Huynh", "Vatsa S. Patel", "Umang Jain", "Mai-Khiem Tran", "Trung-Nghia Le", "Minh-Triet Tran"],
      year: "2024",
      venue: "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
      journal: "2024 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
      type: "conference",
      link: "https://ieeexplore.ieee.org/document/10480198",
      doi: "https://doi.org/10.1109/ISMAR-Adjunct64951.2024.00122",
      pages: "423-424",
      abstract: "This paper presents a simulation framework for urban traffic planning that incorporates temporal and weather dynamics. The system aims to assist in the development of more efficient and resilient urban traffic management strategies by providing realistic modeling of traffic scenarios under varying conditions.",
      image: "/urban-traffic-cover.png",
      keywords: ["Urban Traffic Simulation", "Virtual Reality", "Smart City Planning", "Weather Simulation", "Time-of-Day Visualization", "Unity3D", "OpenStreetMap", "Environmental Modeling"],
      problem: "Modern cities face overwhelming congestion, pollution, and safety challenges caused by rising vehicle density and poor infrastructure adaptability. Urban planners rely on simulation tools to test city layouts before construction—but most current systems overlook key environmental dynamics such as time of day and weather conditions, which critically affect visibility, traffic flow, and pedestrian safety.",
      motivation: "To bridge this gap, this research introduces a virtual reality–based urban traffic planning system that dynamically integrates day/night lighting and weather variability (sunny, cloudy, rainy, and flooded conditions). By allowing planners to experience and interact with realistic city environments, the system aims to improve decision-making and infrastructure design for safer, more efficient cities.",
      method: {
        title: "Urban Traffic Planning Simulator",
        description: "The proposed Urban Traffic Planning Simulator is designed to visualize and analyze city infrastructure under temporal and climatic variations. It combines graph-based traffic modeling, lighting simulation, weather rendering, and VR immersion for interactive exploration.",
        scenarios: [
          "Traffic network modeled as a graph G, where intersections represent nodes and road segments are edges with attributes such as length, capacity, speed, and congestion level",
          "System supports editing and real-time updates to the network (e.g., adding bridges, tunnels, traffic lights) using OpenStreetMap data for accurate geospatial context",
          "Implemented in Unity3D, simulating a realistic Asian city environment with configurable traffic volumes, directions, and time schedules",
          "Time-of-Day Simulation: Volumetric light beams emulate streetlights with warm orange illumination for nighttime urban landscapes"
        ],
        techniques: [
          "Weather-rendering module replicates environmental effects: Sunny (realistic skybox), Cloudy (layered skybox with fog density = 0.006), Rainy (6,000 particles), Flooded (Fresnel effect with Gerstner displacement)",
          "City planners can fine-tune beam parameters (angle, intensity, thickness) to examine illumination coverage",
          "Each weather state dynamically influences visual conditions and is toggled interactively in VR mode",
          "Graph-based traffic modeling with real-time network updates and OpenStreetMap integration"
        ]
      },
      evaluation: {
        models: "User study with 31 participants (civil engineering and urban planning professionals and students) under IRB approval",
        metrics: "5-point Likert scale ratings on Realism (accuracy of environmental depiction), Engagement (sense of immersion), and Functionality (usability of planning features). Compared conventional static simulation vs. proposed dynamic simulation"
      },
      results: [
        "Participants overwhelmingly preferred the dynamic simulation (Mode 2) with time and weather dynamics",
        "Integration of time and weather dynamics significantly enhanced realism and engagement, with smaller score variances across all criteria",
        "System showed potential for urban design visualization, disaster readiness planning (flood impact), and public engagement through virtual city tours",
        "User feedback recommended expanding the simulator to include pedestrians and emergency vehicles for greater situational realism"
      ],
      contributions: [
        "Developed a VR-based urban traffic simulation framework integrating time-of-day lighting and weather dynamics for realistic city visualization",
        "Introduced volumetric streetlight modeling for nighttime realism in virtual urban environments",
        "Designed and implemented interactive weather states (sunny, cloudy, rainy, flooded) with configurable parameters",
        "Conducted a user study demonstrating improved realism, immersion, and functionality over conventional simulators",
        "Provided an adaptable planning tool to assist urban engineers, policymakers, and researchers in visualizing dynamic traffic behavior"
      ],
      citation: "Nguyen, T.V., Thanh, N.D., Huynh, V.T., Patel, V.S., Jain, U., Tran, M.K., Le, T.N. and Tran, M.T., 2024, October. Urban Traffic Planning Simulation with Time and Weather Dynamics. In 2024 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct) (pp. 423-424). IEEE.",
      technologies: {
        frameworks: ["Unity3D", "OpenStreetMap"],
        tools: ["Volumetric lighting", "Fresnel-based water reflection", "Gerstner wave simulation", "Particle systems", "VR headset"],
        datasets: ["OpenStreetMap"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "Road Surface Material Recognition from Dashboard Cameras",
      authors: ["Reyansh Mishra", "Vatsa S. Patel", "Hongjo Kim", "Tam V. Nguyen"],
      year: "2025",
      venue: "International Symposium on Visual Computing (ISVC 2024)",
      journal: "LNCS 15047, Springer Nature Switzerland",
      type: "conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-77389-1_28",
      doi: "https://doi.org/10.1007/978-3-031-77389-1_28",
      pages: "359-370",
      abstract: "Road surfaces aren't all equal: asphalt, bricks, cobblestone, gravel, soil, and wet variants each behave differently for traction, braking distance, stability, and maintenance. If a perception system can recognize the surface material from a dashboard camera in real time, it can support safer navigation, predictive maintenance, and smarter infrastructure planning. This work targets dashcam imagery and proposes a pipeline that separates the road region before classification, improving robustness.",
      image: "/roadsurface-cover.png",
      figures: [
        {
          src: "/roadsurface-fig1.png",
          caption: "Eight target surface materials captured from dashboard cameras.",
          section: "problem"
        },
        {
          src: "/roadsurface-fig2.png",
          caption: "Segmentation–classification framework: from full frame to road-only crop.",
          section: "method"
        },
        {
          src: "/roadsurface-fig3.png",
          caption: "Top: road-only crops selected via integral-image search. Bottom: diffusion-augmented training images.",
          section: "evaluation"
        },
        {
          src: "/roadsurface-table1.png",
          caption: "Quantitative comparison: isolating the road and sampling the densest region yields the best accuracy across all CNN backbones.",
          section: "results"
        }
      ],
      keywords: ["Road Surface Material", "Dashcam Perception", "Image Segmentation", "Integral Image", "Diffusion Augmentation", "Deep CNN Classification", "Intelligent Transportation", "Autonomous Driving"],
      problem: "Road surfaces aren't all equal: asphalt, bricks, cobblestone, gravel, soil, and wet variants each behave differently for traction, braking distance, stability, and maintenance. If a perception system can recognize the surface material from a dashboard camera in real time, it can support safer navigation, predictive maintenance, and smarter infrastructure planning. Most prior work either used non-dashcam viewpoints or treated the task as plain image classification without isolating the road pixels first.",
      motivation: "This work targets dashcam imagery and proposes a pipeline that separates the road region before classification, improving robustness.",
      method: {
        title: "Three-Stage Segmentation-Classification Pipeline",
        description: "A three-stage pipeline tailored for dashcam scenes that isolates road regions before classification to remove distracting context and improve robustness.",
        scenarios: [
          "Segmentation → road-only isolation: Apply semantic segmentation (FCN trained on SIFTFlow) to label pixels (road, sky, building, etc.). Extract the road-only mask to remove distracting context before classification.",
          "Road surface sample extraction: Compute the integral image over the road mask to efficiently locate the densest road region. Extract a fixed-size square block from the road area (80×80 in our setting) as the classification crop.",
          "Classification with diffusion-augmented training: Train CNN backbones (ResNet101, VGG16/19, DenseNet121/169/201, InceptionV3) on crops. Use diffusion-generated images (prompted for road scenes) to expand training diversity and improve generalization."
        ],
        techniques: [
          "FCN (Fully Convolutional Network) for semantic segmentation trained on SIFTFlow dataset",
          "Integral image (summed-area table) for efficient patch selection",
          "Fixed-size road surface crop extraction (80×80 pixels from 255×255 input)",
          "Diffusion-based image augmentation with targeted prompts for road scenes",
          "Multi-backbone comparison: ResNet101, VGG16/19, DenseNet121/169/201, InceptionV3"
        ]
      },
      evaluation: {
        models: "ResNet101, VGG16/19, DenseNet121/169/201, InceptionV3",
        metrics: "Dataset (dashcam-focused): 1,741 images across 8 surface classes, with >100 images per class; train/test split ensuring varied lighting and scene geometry. Training setup: input 255×255; crop 80×80; FCN for segmentation; diffusion-based augmentation applied to all models; standard accuracy metric. Protocols: three inputs per model—(i) full image, (ii) segmentation-filtered road region, (iii) road surface sample extraction crop."
      },
      results: [
        "Segmentation helps; targeted crops help more. Accuracy improves from full-image training → segmentation-classification → road-surface sample extraction for every backbone",
        "Best performing model: DenseNet201 achieving 85.88% accuracy with road surface sample extraction (vs 84.12% with segmentation-classification and 76.47% with full image)",
        "Consistent gains across all backbones: VGG16: 74.71 → 76.47 → 80.59%; DenseNet121: 78.24 → 81.76 → 82.94%",
        "Strong performance on soil/puddles/red soil classes",
        "Remaining confusion between asphalt vs bricks suggests need for more fine-texture cues and class-balanced augmentation"
      ],
      contributions: [
        "A dashcam-specific dataset for 8 road materials, curated and balanced for training/testing",
        "A segmentation-guided pipeline that isolates road pixels to reduce background bias",
        "A fast integral-image sampling step to select the most informative road patch",
        "Diffusion-based augmentation tailored to road scenes, improving generalization",
        "Broad backbone comparison demonstrating consistent gains; DenseNet201 achieves the best accuracy with road-surface sampling"
      ],
      citation: "Mishra, R., Patel, V.S., Kim, H. and Nguyen, T.V., 2025. Road Surface Material Recognition from Dashboard Cameras. In International Symposium on Visual Computing (pp. 359-370). LNCS 15047, Springer Nature Switzerland.",
      technologies: {
        frameworks: ["Python", "PyTorch", "TensorFlow", "OpenCV"],
        segmentation: ["FCN", "SIFTFlow"],
        classification: ["ResNet101", "VGG16", "VGG19", "DenseNet121", "DenseNet169", "DenseNet201", "InceptionV3"],
        tools: ["Integral image", "Diffusion-based augmentation"],
        datasets: ["Dashcam road surface dataset (1,741 images, 8 classes)"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "GAIA: A Benchmark of Analyzing User Rankings for Synthesized Images",
      authors: ["Kriti Sharma", "Thomas Shrek", "Vatsa S. Patel", "Minh-Triet Tran", "Tam V. Nguyen"],
      year: "2025",
      venue: "International Symposium on Visual Computing (ISVC 2024)",
      journal: "LNCS 15046, Springer Nature Switzerland",
      type: "conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-77392-1_34",
      doi: "https://doi.org/10.1007/978-3-031-77392-1_34",
      pages: "451-463",
      abstract: "Text-to-image systems are now prolific—artists, educators, and everyday users rely on them to translate prompts into convincing visuals. Yet what counts as a 'good' generated image depends on people, not just metrics. There's often no ground truth, prompts vary in complexity, and human judgments span prompt fidelity, realism, aesthetics, and technical quality. This work introduces GAIA, a benchmark that pairs images from eight popular generators with human rankings under multiple criteria, enabling rigorous analysis of how models perform across simple and complex prompts.",
      image: "/gaia-cover.jpg",
      figures: [
        {
          src: "/gaia-fig1.png",
          caption: "Contrasting generations from different prompts and models—illustrating diversity and evaluation challenges.",
          section: "problem"
        },
        {
          src: "/gaia-fig2.png",
          caption: "GAIA pipeline and ranking interface—prompted generations, randomized presentation, and criterion-wise human rankings.",
          section: "method"
        },
        {
          src: "/gaia-fig3.png",
          caption: "Per-prompt grids across 8 models—showing spread in fidelity, realism, and style for simple vs complex prompts.",
          section: "evaluation"
        },
        {
          src: "/gaia-fig4.png",
          caption: "Aggregate human rankings across four criteria—Adobe Firefly and Midjourney lead overall.",
          section: "results"
        }
      ],
      keywords: ["Generative AI", "Text-to-Image", "Human Evaluation", "Prompt Similarity", "Realism", "Aesthetics", "Visual Quality", "Multimodal Regression", "Semantic Alignment", "Benchmark"],
      problem: "Text-to-image systems are now prolific—artists, educators, and everyday users rely on them to translate prompts into convincing visuals. Yet what counts as a 'good' generated image depends on people, not just metrics. There's often no ground truth, prompts vary in complexity, and human judgments span prompt fidelity, realism, aesthetics, and technical quality.",
      motivation: "This work introduces GAIA, a benchmark that pairs images from eight popular generators with human rankings under multiple criteria, enabling rigorous analysis of how models perform across simple and complex prompts.",
      method: {
        title: "Dataset, Protocol & Human Evaluation Framework",
        description: "GAIA contains 800 images generated from 100 prompts (50 simple, 50 complex) across 8 tools, with a custom web interface for criterion-wise human ranking.",
        scenarios: [
          "Dataset & Protocol: GAIA contains 800 images generated from 100 prompts (50 simple, 50 complex) across 8 tools: Adobe Firefly, DeepDream Generator, Artbreeder Mixer, DeepAI, StarryAI, Picsart AI Image Generator, Stability AI (Clipdrop), and Midjourney. Prompts were curated by first sampling 200 candidates via an LLM, then refining to 100 unique items. Prompts are categorized (Nature, Architecture, Historic, Human-related) with length statistics showing complex prompts are nearly 2× longer than simple ones on average.",
          "Human Criteria: For each prompt, participants rank 8 images (1=best, 8=worst) along four criteria: (1) Prompt similarity (faithfulness to the text), (2) Realism (plausibility of content), (3) Aesthetics (composition/appeal), (4) Visual quality (technical clarity/cleanliness).",
          "Interface & Data: A custom web UI (built with Fyne + Firebase) randomizes image order and records rankings plus permutations for bias control."
        ],
        techniques: [
          "Human ranking protocol with four evaluation criteria (prompt similarity, realism, aesthetics, visual quality)",
          "Multimodal regression: VGG16 for image features + Word2Vec for prompt features, concatenated and fed to SVR",
          "Semantic alignment proxy: BLIP captions of images compared to original prompts via Word2Vec similarity",
          "Randomized image presentation in custom web UI to control for ordering bias"
        ]
      },
      evaluation: {
        models: "8 text-to-image generators: Adobe Firefly, DeepDream Generator, Artbreeder Mixer, DeepAI, StarryAI, Picsart AI Image Generator, Stability AI (Clipdrop), and Midjourney",
        metrics: "<strong>Participants:</strong> 20 staff/students in Computer Science; each session ~20 minutes per prompt-image set. Analyses include: (1) Human ranking analysis: per-model average rank across criteria (lower is better), (2) Multimodal regression (predicting average human score): VGG16 for image features + Word2Vec for prompt features, concatenated and fed to SVR (80/20 split), (3) Semantic alignment proxy: BLIP captions of images compared to original prompts via Word2Vec similarity (simple vs complex breakdown and combined)."
      },
      results: [
        "Human rankings: Adobe Firefly and Midjourney consistently achieve lower (better) average ranks across prompt similarity, realism, aesthetics, and visual quality, for both simple and complex prompts",
        "SVR regression: Multimodal features (image + text) predict average human scores with category-dependent error; Human-related prompts show higher error for simple prompts (especially for aesthetics), whereas complex prompts shift error patterns (e.g., higher for History on similarity)",
        "Semantic alignment (BLIP→Word2Vec): Models differ modestly on text-image semantic similarity averages; this underscores that automated semantic proxies do not fully capture human criteria like aesthetics and realism",
        "Validation: The results validate the need for GAIA's human rankings beyond automated metrics"
      ],
      contributions: [
        "GAIA benchmark: 800 images × 8 models × 100 prompts (simple/complex), with human rankings on four criteria",
        "Prompt taxonomy with category and complexity analysis (length, concept composition) to probe model sensitivity",
        "Two complementary analyses: (i) human ranking aggregation and (ii) multimodal regression linking visual + textual features to perceived quality",
        "Semantic alignment study (BLIP captioning + Word2Vec similarity) revealing limits of proxy metrics vs. human judgments",
        "A reproducible protocol and UI for criterion-wise human evaluation at scale"
      ],
      citation: "Sharma, K., Shrek, T., Patel, V.S., Tran, M.T. and Nguyen, T.V., 2025. GAIA: A Benchmark of Analyzing User Rankings for Synthesized Images. In International Symposium on Visual Computing (pp. 451-463). LNCS 15046, Springer Nature Switzerland.",
      technologies: {
        frameworks: ["Fyne", "Firebase", "PyTorch", "TensorFlow", "Python"],
        visionText: ["VGG16", "Word2Vec", "BLIP"],
        tools: ["scikit-learn SVR", "NumPy", "Pandas"],
        generators: ["Adobe Firefly", "DeepDream Generator", "Artbreeder Mixer", "DeepAI", "StarryAI", "Picsart AI", "Stability AI (Clipdrop)", "Midjourney"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "Motorcycle Helmet Detection Benchmarking",
      authors: ["Kunal Agrawal", "Vatsa S. Patel", "Ian Cannon", "Minh-Triet Tran", "Tam V. Nguyen"],
      year: "2024",
      venue: "International Symposium on Information and Communication Technology (SOICT 2024)",
      journal: "CCIS 2350, Springer Nature Singapore",
      type: "conference",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-4282-3_17",
      doi: "https://doi.org/10.1007/978-981-96-4282-3_17",
      pages: "203-215",
      abstract: "This paper focuses on evaluating the robustness of helmet detection in the context of traffic surveillance, achieved through state-of-the-art deep learning models. This aims to contribute significantly to motorcycle safety by implementing intelligent systems adept at accurately identifying helmets. An integral component of this inquiry entails a meticulous benchmark of cutting-edge object detection models and the integration of advanced techniques, aiming not only to bolster accuracy but also to improve the overall practicality and effectiveness of helmet detection systems.",
      image: "/motorcycle-helmet-cover.png",
      keywords: ["Helmet Detection", "Object Detection", "Benchmarking", "Traffic Surveillance", "Deep Learning", "Cross-Domain Transfer", "Computer Vision", "Robustness"],
      problem: "Motorcycles and e-bikes are soaring in dense cities, but helmet compliance is inconsistent. Missed detections in traffic CCTV—especially at night, in rain/fog, or with motion blur—mean unsafe riders go unnoticed.",
      motivation: "Can modern, real-time detectors reliably spot helmets across messy, real-world street scenes, and even transfer to new domains like construction sites?",
      method: {
        title: "Method Overview",
        description: "We build a full pipeline for Helmet Detection Benchmarking with the MHDD dataset: 8,000 images from traffic cameras (Vietnam), with colored + grayscale tracks (4,000 each). Each track has normal, synthetic rain, fog, snow (1,000 images per condition).",
        scenarios: [
          "Dataset annotations: Helmet presence labeled via Roboflow with tight ROIs for riders/helmets",
          "Augmentations & Preprocessing: Frame extraction, histogram equalization, adaptive contrast, normalization",
          "Synthetic weather via Pillow/NumPy: snowflakes, fog layers with Gaussian blur, rain streaks",
          "Cross-Domain Setup: Transfer learning with Hardhat Construction dataset to test adaptability beyond traffic"
        ],
        techniques: [
          "Benchmark YOLOv5/6/7/8 (s/w6 variants), Faster R-CNN (ResNet-50), RT-DETR, Detectron2",
          "Architectural add-ons: SPP and ensembles",
          "Per-condition training and testing: normal / rain / fog / snow scenarios",
          "Cross-domain evaluation: Hardhat dataset for construction site transfer learning"
        ]
      },
      evaluation: {
        models: "YOLOv5/6/7/8 (s/w6 variants), Faster R-CNN (ResNet-50), RT-DETR, Detectron2",
        metrics: "Precision, Recall, F1, and mAP at standard IoU thresholds across normal / rain / fog / snow conditions"
      },
      results: [
        "Top single-domain performer: YOLOv7-w6 (Grayscale) with mAP 0.899",
        "Strong two-stage baseline: Faster R-CNN ResNet-50 (Grayscale) with mAP 0.871",
        "Grayscale often edges out color, suggesting robustness to illumination variance",
        "Cross-domain transfer (Hardhat → Traffic): YOLOv7-w6 (Colored) mAP 0.904",
        "Cross-domain transfer: Faster R-CNN ResNet-50 (Grayscale) mAP 0.904",
        "For deployment, YOLOv7-w6 is preferred due to speed with near-SOTA accuracy",
        "RT-DETR and Detectron2 lag behind (mAP ≈ 0.70–0.80 range)",
        "Typical errors: dark hair mistaken for helmets, caps misclassified, small distant helmets missed"
      ],
      contributions: [
        "MHDD: A focused 8k-image helmet dataset with paired color/grayscale and synthetic weather for controlled robustness testing",
        "Unified benchmark across YOLOv5/6/7/8, Faster R-CNN, RT-DETR, Detectron2, with clear accuracy–speed tradeoffs",
        "Grayscale advantage observed for helmet detection in traffic CCTV",
        "Cross-domain transfer: Training with Hardhat data generalizes to traffic surveillance (and vice-versa), reaching mAP 0.904",
        "Practical deployment guidance: YOLOv7-w6 recommended for real-time systems; Faster R-CNN as a stable two-stage baseline"
      ],
      citation: "Agrawal, K., Patel, V.S., Cannon, I., Tran, M.T. and Nguyen, T.V., 2024, December. Motorcycle Helmet Detection Benchmarking. In International Symposium on Information and Communication Technology (pp. 203-215). Singapore: Springer Nature Singapore.",
      technologies: {
        frameworks: ["PyTorch", "Ultralytics YOLOv5/6/7/8", "Faster R-CNN", "RT-DETR", "Detectron2"],
        tools: ["OpenCV", "Pillow", "NumPy", "Roboflow", "CUDA", "TensorBoard"],
        datasets: ["MHDD", "Hardhat Construction Dataset"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "Motion Analysis in Static Images",
      authors: ["Kunal Agrawal", "Vatsa S. Patel", "Reema Tharra", "Trung-Nghia Le", "Minh-Triet Tran", "Tam V. Nguyen"],
      year: "2025",
      venue: "International Symposium on Information and Communication Technology (SOICT 2024)",
      journal: "CCIS 2350, Springer Nature Singapore",
      type: "conference",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-4282-3_16",
      doi: "https://doi.org/10.1007/978-981-96-4282-3_16",
      pages: "193-202",
      abstract: "Some static pictures seem to 'move.' Humans can reconcile these illusions—machines, not so much. Building AI that reliably detects motion illusions in still images matters for visual perception research, dataset design, and safety-critical vision (where misreading patterns could cause downstream errors). Prior work lacked a tailored, balanced dataset and a clear study of the role of color in illusion recognition. This paper fills both gaps by introducing MISS (Motion Illusion in Static Scenes)—a curated dataset—and benchmarking modern CNNs on color vs. grayscale variants.",
      image: "/motion-cover.png",
      figures: [
        {
          src: "/motion-fig1.png",
          caption: "A static image that evokes perceived motion—representative of the target phenomenon.",
          section: "problem"
        },
        {
          src: "/motion-fig2.png",
          caption: "Positive (illusion) and negative (non-illusion) samples used to train and evaluate models.",
          section: "method"
        },
        {
          src: "/motion-fig5.png",
          caption: "Color (left) vs. grayscale (right): assessing the contribution of chromatic cues to illusion recognition.",
          section: "evaluation"
        },
        {
          src: "/motion-fig4.png",
          caption: "Model-wise mAP on color vs. grayscale MISS—ResNet50 leads; grayscale consistently lowers accuracy.",
          section: "results"
        }
      ],
      keywords: ["Motion Illusion", "Optical Illusion", "Static Imagery", "Color vs. Grayscale", "CNN Benchmark", "Visual Perception", "Computer Vision", "Image Classification"],
      problem: "Some static pictures seem to 'move.' Humans can reconcile these illusions—machines, not so much. Building AI that reliably detects motion illusions in still images matters for visual perception research, dataset design, and safety-critical vision (where misreading patterns could cause downstream errors). Prior work lacked a tailored, balanced dataset and a clear study of the role of color in illusion recognition.",
      motivation: "This paper fills both gaps by introducing MISS (Motion Illusion in Static Scenes)—a curated dataset of motion-illusion and non-illusion images—and benchmarking modern CNNs on color vs. grayscale variants to understand the role of color in illusion recognition.",
      method: {
        title: "MISS Dataset & CNN Benchmark Framework",
        description: "We introduce MISS (Motion Illusion in Static Scenes)—a curated dataset of 600 high-resolution color images, balanced (300 motion-illusion / 300 non-illusion), and benchmark modern CNNs on color vs. grayscale variants.",
        scenarios: [
          "Dataset curation (MISS): 600 high-resolution color images, balanced (300 motion-illusion / 300 non-illusion), collected via Google Image Search and expanded via Google Lens 'visually similar.' Seven expert raters screened images for reliable illusion perception.",
          "Grayscale counterpart: each color image converted to grayscale → an additional set of 600 images (mirrored labels).",
          "Task: binary classification (illusion vs. non-illusion) on color and grayscale sets.",
          "Splits (per color and per grayscale set): Train: 400 images (272 illusion / 128 non-illusion), Val: 100 images (50 / 50), Test: 100 images (50 / 50)"
        ],
        techniques: [
          "Google Image Search and Google Lens for dataset collection and expansion",
          "Expert human validation with seven raters for reliable illusion perception",
          "Color-to-grayscale conversion to create parallel dataset for controlled comparison",
          "Binary classification framework with balanced train/val/test splits",
          "SGD with momentum (lr = 0.001, momentum = 0.9) for optimization"
        ]
      },
      evaluation: {
        models: "MobileNet, MobileNetV2, ResNet50, ResNetRS200, Xception, EfficientNetB5, EfficientNetV2-S, InceptionV3, NASNetMobile, NASNetLarge",
        metrics: "<strong>Optimization:</strong> SGD with momentum (lr = 0.001, momentum = 0.9). <strong>Metrics:</strong> Primary—mAP; also report precision, recall, F1 to examine false positives vs. misses."
      },
      results: [
        "Color helps: All models perform better on color than grayscale—color encodes cues that aid illusion discrimination",
        "Top model: ResNet50 with Color mAP: 81%, Grayscale mAP: 76.99%",
        "Strong compact model: MobileNet (80% → 73% mAP)",
        "Largest drops to grayscale: EfficientNetB5 (75% → 55%), NASNetMobile (72% → 54%), indicating heavier reliance on color statistics",
        "Robustness: ResNet50 and MobileNetV2 degrade less when color is removed, suggesting stronger texture/structure reliance",
        "Precision/recall trends corroborate mAP: high-precision models reduce false positives on non-illusion images; high-recall models better capture true illusions"
      ],
      contributions: [
        "A balanced, curated dataset (MISS) for motion-illusion recognition in static images, with color and grayscale counterparts (600 images each)",
        "The first systematic benchmark contrasting color vs. grayscale performance across modern CNN families",
        "Empirical evidence that color is a strong cue for illusion recognition, yet some backbones (e.g., ResNet50) transfer better to grayscale",
        "A clear training/evaluation protocol (balanced splits, standardized metrics) to enable reproducible follow-ups",
        "Identification of which CNN architectures rely more heavily on color vs. texture/structure cues"
      ],
      citation: "Agrawal, K., Patel, V.S., Tharra, R., Le, T.N., Tran, M.T. and Nguyen, T.V., 2025. Motion Analysis in Static Images. In International Symposium on Information and Communication Technology (pp. 193-202). CCIS 2350, Springer Nature Singapore.",
      technologies: {
        frameworks: ["Python", "TensorFlow", "Keras"],
        classification: ["MobileNet", "MobileNetV2", "ResNet50", "ResNetRS200", "Xception", "EfficientNetB5", "EfficientNetV2-S", "InceptionV3", "NASNetMobile", "NASNetLarge"],
        tools: ["Google Image Search", "Google Lens", "SGD optimizer"],
        datasets: ["MISS (Motion Illusion in Static Scenes)"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "Real Estate Pricing Prediction Via Textual and Visual Features",
      authors: ["Amira Yousif", "Samah Baraheem", "Sai Surya Vaddi", "Vatsa S. Patel", "Ju Shen", "Tam V. Nguyen"],
      year: "2023",
      venue: "Machine Vision and Applications",
      journal: "Machine Vision and Applications, Volume 34 (126), Springer-Verlag GmbH Germany",
      type: "journal",
      link: "https://link.springer.com/article/10.1007/s00138-023-01464-5",
      doi: "https://doi.org/10.1007/s00138-023-01464-5",
      volume: "34",
      issue: "126",
      abstract: "Real estate pricing has long relied on traditional metrics—square footage, bedrooms, zip codes—but today's property market also thrives on visual appeal and contextual cues like architecture style or interior condition. While earlier studies used textual features alone, they ignored what images can reveal about a home's true value. This research addresses that gap by combining estate attributes and property images into a unified learning framework. The study introduces REPD-3000, a large-scale dataset of 3,000 houses across 74 U.S. cities and 22 states, each annotated with 14 estate attributes and 5 visual images.",
      image: "/real-estate-cover.png",
      figures: [
        {
          src: "/real-estate-fig1.png",
          caption: "Sample visual data from the REPD-3000 dataset: exterior, living room, kitchen, bathroom, and bedroom views per property.",
          section: "problem"
        },
        {
          src: "/real-estate-fig2.png",
          caption: "Pipeline of the proposed system: visual feature extraction via PlacesCNN, concatenation with estate attributes, and multi-kernel deep regression for price estimation.",
          section: "method"
        },
        {
          src: "/real-estate-fig3.png",
          caption: "Deep learning regression structure combining multiple kernels from visual and textual modalities.",
          section: "evaluation"
        },
        {
          src: "/real-estate-fig4.png",
          caption: "Predicted vs. ground-truth house prices for sample properties—illustrating high alignment in most test cases.",
          section: "results"
        }
      ],
      keywords: ["House Price Prediction", "Multi-Kernel Learning", "Visual Computing", "Estate Attributes", "Deep Regression", "CNN Features", "Machine Learning", "Computer Vision"],
      problem: "Real estate pricing has long relied on traditional metrics—square footage, bedrooms, zip codes—but today's property market also thrives on visual appeal and contextual cues like architecture style or interior condition. While earlier studies used textual features alone, they ignored what images can reveal about a home's true value.",
      motivation: "This research addresses that gap by combining estate attributes and property images into a unified learning framework. The study introduces REPD-3000, a large-scale dataset of 3,000 houses across 74 U.S. cities and 22 states, each annotated with 14 estate attributes and 5 visual images (exterior, living room, kitchen, bedroom, and bathroom). The goal: build a multi-kernel deep regression model capable of understanding how both what's written (attributes) and what's seen (images) influence price.",
      method: {
        title: "Multi-Kernel Deep Regression Framework",
        description: "The proposed system integrates two complementary data streams: textual features (14 manually curated property attributes) and visual features (CNN-extracted representations from five key house images).",
        scenarios: [
          "Textual features: 14 manually curated property attributes (location, area, year built, HOA, number of rooms, school district, etc.)",
          "Visual features: CNN-extracted representations from the five key house images. A pre-trained PlacesCNN model encodes each image into a 4096-dimensional vector, ensuring rich scene representation",
          "All textual and visual features are normalized and concatenated into multiple kernels—one for each modality (e.g., kitchen, bedroom, exterior, etc.)",
          "Multi-kernel deep regression model: Dense layers with ReLU activations and batch normalization stabilize training. Dropout mitigates overfitting. RMSProp optimizer (lr = 0.001) ensures convergence. The model outputs a continuous price prediction."
        ],
        techniques: [
          "Pre-trained PlacesCNN for visual feature extraction (4096-dimensional vectors per image)",
          "Feature normalization and concatenation into modality-specific kernels",
          "Multi-kernel architecture with dense layers, ReLU activations, and batch normalization",
          "Dropout regularization to prevent overfitting",
          "RMSProp optimizer with learning rate 0.001"
        ]
      },
      evaluation: {
        models: "Linear Regression, Linear SVR, Regression Tree, k-Nearest Neighbors, Multi-kernel Support Vector Regression (baseline), Multi-kernel Deep Learning Regression (proposed)",
        metrics: "<strong>Dataset:</strong> REPD-3000: 3,000 houses (15,000 total images), each with 14 numerical attributes and 5 photos per property. Prices span $445 – $4.68 M. Train/test split: 90% / 10%. Data sourced from Zillow and Redfin, with manual annotation and normalization. <strong>Metric:</strong> Mean Absolute Error (MAE) between predicted and ground-truth prices."
      },
      results: [
        "Best performance: Multi-kernel deep learning regression achieved MAE = 16.60 on REPD-3000 and MAE = 14.38 on REPD-2000 (smaller prior version)",
        "Baseline multi-kernel SVR: MAE = 17.00",
        "Using a single image kernel: Kitchen images gave the lowest MAE (16.82) among single-modality models. Exterior images performed worst (MAE = 25.51)",
        "Interpretation: Integrating both textual and visual cues outperforms any single modality. Kitchen and living room images provide the most discriminative signals about property value"
      ],
      contributions: [
        "Introduced REPD-3000, a large-scale benchmark linking visual and textual real estate data (3,000 houses, 74 U.S. cities, 22 states)",
        "Proposed a multi-kernel deep regression framework unifying multiple visual views and textual features",
        "Demonstrated superior accuracy (MAE = 16.60) over traditional and SVR baselines",
        "Provided a detailed analysis of individual kernel contributions, identifying which visual aspects drive pricing accuracy",
        "Established a scalable approach for multimodal property valuation applicable to national-scale markets"
      ],
      citation: "Yousif, A., Baraheem, S., Vaddi, S.S., Patel, V.S., Shen, J. and Nguyen, T.V., 2023. Real estate pricing prediction via textual and visual features. Machine Vision and Applications, 34(126).",
      technologies: {
        frameworks: ["Python", "TensorFlow", "Keras", "NumPy", "Scikit-learn"],
        visionText: ["PlacesCNN"],
        tools: ["RMSProp optimizer", "Dense layers", "ReLU", "Batch Normalization", "Dropout"],
        datasets: ["REPD-3000", "REPD-2000", "Zillow", "Redfin"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          },
          {
            src: "/UDRI_logo.png",
            alt: "University of Dayton Research Institute",
            label: "University of Dayton / UDRI Research Fellowship Program"
          }
        ]
      }
    },
    {
      title: "Photobombing Removal Benchmarking",
      authors: ["Sai Pavan Kumar Prakya", "Madamanchi Manju Venkata Sainath", "Vatsa S. Patel", "Samah Saeed Baraheem", "Tam V. Nguyen"],
      year: "2022",
      venue: "International Symposium on Visual Computing (ISVC 2022)",
      journal: "LNCS 13599, Springer Nature Switzerland",
      type: "conference",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-20716-7_5",
      doi: "https://doi.org/10.1007/978-3-031-20716-7_5",
      pages: "55-66",
      abstract: "Photobombing—unwanted people or objects entering a scene—spoils otherwise meaningful photos. Manual cleanup (e.g., Photoshop) is skilled and time-consuming; automated image inpainting promises quick fixes, but which methods work best when the masked region is large, textured, or near the subject? This work builds a complete benchmark for photobomb removal: curated data, expert 'clean' ground truth, multiple inpainting baselines, and rigorous metrics.",
      image: "/photobomb-cover.jpg",
      figures: [
        {
          src: "/photobomb-fig1.png",
          caption: "Photobombing removal pipeline: input image, annotated mask, reconstructed output.",
          section: "problem"
        },
        {
          src: "/photobomb-fig2.png",
          caption: "Benchmark inputs and workflow: photobombed image + mask passed to six inpainting methods; outputs compared to expert ground truth.",
          section: "method"
        },
        {
          src: "/photobomb-fig4.png",
          caption: "Aggregate performance across FID, SSIM, PSNR, and TSI; deep LaMa leads overall.",
          section: "results"
        }
      ],
      keywords: ["Photobombing Removal", "Image Inpainting", "Benchmark", "LaMa", "Gated Convolution", "Exemplar-Based", "Coherence Transport", "Fast Marching", "Fluid Dynamics", "FID", "SSIM", "PSNR", "Texture Similarity"],
      problem: "Photobombing—unwanted people or objects entering a scene—spoils otherwise meaningful photos. Manual cleanup (e.g., Photoshop) is skilled and time-consuming; automated image inpainting promises quick fixes, but which methods work best when the masked region is large, textured, or near the subject?",
      motivation: "This work builds a complete benchmark for photobomb removal: curated data, expert 'clean' ground truth, multiple inpainting baselines, and rigorous metrics to determine which automated methods work best.",
      method: {
        title: "Photobomb Removal Benchmark Framework",
        description: "A comprehensive benchmark with 150 photobombed images, expert ground truth, and six inpainting methods spanning classical and deep approaches.",
        scenarios: [
          "Dataset & Ground Truth: Collected 150 photobombed images from public sources; annotated the unwanted regions using MATLAB ROI freehand masks. For ground truth, professional editors produced Photoshopped versions with the distracting content removed.",
          "Methods Benchmarked (6): Classical approaches include Exemplar-Based Image Inpainting (EBII), Coherence Transport (CT), Fast Marching (FM), and Fluid Dynamics (FD). Deep learning methods include Gated Convolution (GC) and LaMa (Fourier convolutions + large-mask training).",
          "For each of 150 images, run all 6 methods → 900 reconstructions. Compare each reconstruction to its corresponding expert ground truth.",
          "Mask-size analysis: Stratify performance by percentage of the image masked to probe robustness for small vs. large removals."
        ],
        techniques: [
          "MATLAB ROI Freehand for photobomb region annotation",
          "Professional Photoshop editing for ground-truth clean images",
          "Classical inpainting: EBII, Coherence Transport, Fast Marching, Fluid Dynamics",
          "Deep inpainting: Gated Convolution (Places2 weights), LaMa (FFCs)",
          "Multi-metric evaluation framework with mask-size stratification"
        ]
      },
      evaluation: {
        models: "6 inpainting methods: Exemplar-Based Image Inpainting (EBII), Coherence Transport (CT), Fast Marching (FM), Fluid Dynamics (FD), Gated Convolution (GC), LaMa",
        metrics: "<strong>Protocol:</strong> For each of 150 images, run all 6 methods → 900 reconstructions. <strong>Metrics:</strong> FID (distribution realism; lower is better), SSIM (structural similarity; higher is better), PSNR (signal fidelity; higher is better), TSI (proposed Texture-based Similarity Index via LBP χ²; lower rank is better). <strong>Analysis:</strong> Mask-size stratification to probe robustness for small vs. large removals."
      },
      results: [
        "Overall winner: LaMa achieves the best scores across metrics—FID: 29.70 (↓), SSIM: 0.9448 (↑), PSNR: 28.35 dB (↑), TSI rank: 1 (best)",
        "Traditional methods (CT, FM, FD, EBII) perform competitively on smaller masks; performance degrades as mask size grows",
        "GC underperforms on this benchmark (e.g., SSIM < 0.8 across mask ranges), likely due to reliance on local pixel context that is insufficient for larger semantic gaps",
        "Mask-size trends: FID increases and SSIM/PSNR decrease as the masked area grows; LaMa remains the most stable across all ranges",
        "Failure cases: Highly structured textures (e.g., text/letters) and large in-subject holes remain challenging for all methods, though LaMa retains the best visual plausibility"
      ],
      contributions: [
        "A photobombing removal benchmark with 150 masked images and expert ground-truth edits",
        "Six inpainting baselines spanning classical PDE/transport and modern deep approaches",
        "A multi-metric evaluation (FID, SSIM, PSNR) plus TSI to capture texture fidelity",
        "Mask-size robustness analysis, revealing where methods fail and why",
        "Clear evidence that large-receptive-field deep inpainting (LaMa) is state-of-the-art for photobomb removal"
      ],
      citation: "Prakya, S.P.K., Sainath, M.M.V., Patel, V.S., Baraheem, S.S. and Nguyen, T.V., 2022. Photobombing removal benchmarking. In International Symposium on Visual Computing (pp. 55-66). LNCS 13599, Springer Nature Switzerland.",
      technologies: {
        frameworks: ["MATLAB", "Python", "NumPy", "OpenCV"],
        tools: ["Adobe Photoshop", "MS Paint", "Cleanup Pictures", "MATLAB ROI Freehand"],
        classical: ["EBII", "Coherence Transport", "Fast Marching", "Fluid Dynamics"],
        deep: ["Gated Convolution", "LaMa"],
        metrics: ["FID", "SSIM", "PSNR", "TSI (Texture-based Similarity Index)"],
        datasets: ["150 photobombed images with expert ground truth"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          }
        ]
      }
    },
    {
      title: "Data-Driven City Traffic Planning Simulation",
      authors: ["Tam V. Nguyen", "Thanh Ngoc-Dat Tran", "Viet-Tham Huynh", "Bao Truong", "Minh-Quan Le", "Mohit Kumavat", "Vatsa S. Patel", "Mai-Khiem Tran", "Minh-Triet Tran"],
      year: "2022",
      venue: "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
      journal: "IEEE ISMAR-Adjunct 2022",
      type: "conference",
      link: "https://ieeexplore.ieee.org/document/9995707",
      doi: "https://doi.org/10.1109/ISMAR-Adjunct57072.2022.00185",
      pages: "859-864",
      abstract: "Urban congestion has become a global challenge — millions of vehicles move through dense city networks daily, overwhelming manual traffic monitoring systems. City engineers still rely on outdated 'clicker counts' and synthetic simulations disconnected from real-world conditions. This research introduces a data-driven city traffic planning simulator that integrates computer vision–based traffic analysis with virtual reality simulation. Instead of mock data, it uses real traffic footage from urban camera grids to estimate flow, density, and direction — then feeds this data into a 3D interactive simulator where planners can test design changes and observe real-time impacts.",
      image: "/data-driven-cover.png",
      figures: [
        {
          src: "/data-driven-fig1.png",
          caption: "Proposed two-part system: traffic data analysis using AI vision and city traffic simulation for planning.",
          section: "problem"
        },
        {
          src: "/data-driven-fig2.png",
          caption: "Vehicle detection and tracking pipeline (YOLOv5 + DeepSORT) feeding the data-driven simulator; new infrastructure instantly affects city graph and flow.",
          section: "method"
        },
        {
          src: "/data-driven-fig3.png",
          caption: "Adding new road infrastructure in the simulator showing real-time graph updates.",
          section: "method"
        },
        {
          src: "/data-driven-fig4.png",
          caption: "Building the 3D city model (Blender → Unity3D) pipeline.",
          section: "evaluation"
        },
        {
          src: "/data-driven-fig5.png",
          caption: "Three navigation modes in the simulator: teleport, third-person, and first-person VR.",
          section: "evaluation"
        },
        {
          src: "/data-driven-fig6.png",
          caption: "Average user ratings across five criteria — strong usability for third-person mode and realism for immersive VR.",
          section: "results"
        }
      ],
      keywords: ["Data-Driven Simulation", "Computer Vision", "Traffic Analysis", "YOLOv5", "DeepSORT", "Unity3D", "Virtual Reality", "Urban Planning", "Visualization", "Smart Cities"],
      problem: "Urban congestion has become a global challenge — millions of vehicles move through dense city networks daily, overwhelming manual traffic monitoring systems. City engineers still rely on outdated 'clicker counts' and synthetic simulations disconnected from real-world conditions.",
      motivation: "This research introduces a data-driven city traffic planning simulator that integrates computer vision–based traffic analysis with virtual reality simulation. Instead of mock data, it uses real traffic footage from urban camera grids to estimate flow, density, and direction — then feeds this data into a 3D interactive simulator where planners can test design changes (e.g., adding bridges, roads, or tunnels) and observe real-time impacts.",
      method: {
        title: "Data-Driven Traffic Analysis & 3D/VR Simulation Framework",
        description: "The framework consists of two major components: (1) Traffic Data Analysis using YOLOv5 and DeepSORT, and (2) City Traffic Planning Simulator built in Unity3D with VR integration.",
        scenarios: [
          "Traffic Data Analysis: Input: Real city surveillance videos. Detection: YOLOv5 identifies vehicles (cars, buses, trucks, motorbikes). Tracking: DeepSORT assigns persistent IDs and tracks trajectories. Metrics computed: Density (k): number of vehicles per roadway length; Flow (q = k × v̄s): using harmonic mean of speeds; Dominant directions: computed via K-Means clustering on movement vectors with Elbow method for optimal cluster count.",
          "Graph construction: Each camera = node; road segments = weighted edges (distance, flow). This forms a spatial-temporal traffic graph Gt, used as simulation input.",
          "City Traffic Planning Simulator: Data-driven engine replays real traffic movement inside a simulated 3D city model. User interactivity: Add/remove infrastructure (roads, bridges, tunnels, overpasses); Change directionality (e.g., one-way ↔ two-way); Observe automatic graph update and recomputed traffic flows.",
          "Visualization: Based on Unity3D with VR integration (Oculus Quest), enabling city planners to visualize congestion relief before construction."
        ],
        techniques: [
          "YOLOv5 for vehicle detection across multiple classes",
          "DeepSORT for persistent tracking and trajectory analysis",
          "K-Means clustering with Elbow method for movement direction analysis",
          "Graph-based traffic modeling with weighted edges",
          "Unity3D for real-time 3D simulation and rendering",
          "Oculus Quest VR integration for immersive planning"
        ]
      },
      evaluation: {
        models: "YOLOv5 (detection), DeepSORT (tracking), K-Means (clustering)",
        metrics: "<strong>Implementation:</strong> City chosen: Ho Chi Minh City, Vietnam — over 7.3 million motorbikes and dense traffic grid. Dataset: 26,821 frames, 244,106 manually annotated bounding boxes (cars, buses, trucks, two-wheelers). 3D assets: City map generated in Blender, textured using height maps (terrain.party) and Google Maps imagery; imported into Unity3D for real-time interaction. <strong>User Study:</strong> 25 participants (ages 19–44, mean 26.6). Metrics: Ease of use, convenience, realism, functionality, preference (5-point Likert scale). Three navigation modes: Mode 1 (Teleport), Mode 2 (Third-person), Mode 3 (First-person VR)."
      },
      results: [
        "Integration success: Real traffic data → interactive simulation → user-tested VR interface",
        "Practical benefits: City engineers can visualize the effects of structural changes (e.g., adding a bridge reduces traffic load on adjacent roads)",
        "User experience findings: Ease of use: Mode 1 & 2 rated highest (simple keyboard or controller input). Realism: Mode 3 (first-person VR) rated most immersive. Convenience: Mode 2 (third-person) balanced usability and realism",
        "Overall preference: Users favored Mode 2 for usability and Mode 3 for realism",
        "VR adds realism but introduces learning curve and motion sickness. Hybrid design (3rd-person + immersive modes) balances functionality and user comfort",
        "Scalability: The framework can generalize to other cities worldwide with minimal adaptation"
      ],
      contributions: [
        "Introduced the first data-driven traffic simulation integrating real-world video analytics into urban planning visualization",
        "Developed a graph-based traffic modeling approach using actual camera data rather than synthetic estimates",
        "Built an interactive 3D/VR simulation tool for testing infrastructure changes",
        "Conducted a human-centered user study evaluating realism, usability, and interactivity in urban planning simulations",
        "Created an open framework adaptable to multiple metropolitan contexts"
      ],
      citation: "Nguyen, T.V., Tran, T.N.D., Huynh, V.T., Truong, B., Le, M.Q., Kumavat, M., Patel, V.S., Tran, M.K. and Tran, M.T., 2022. Data-driven city traffic planning simulation. In IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct) (pp. 859-864). IEEE.",
      technologies: {
        frameworks: ["Python", "Unity3D", "C#", "Blender"],
        visionText: ["YOLOv5", "DeepSORT", "K-Means"],
        tools: ["OpenStreetMap", "Google Maps Satellite", "Height Maps", "Oculus Quest VR", "IRB-approved UX survey"],
        datasets: ["Ho Chi Minh City traffic dataset (26,821 frames, 244,106 annotations)"]
      },
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          },
          {
            src: "/vinif-logo.jpg",
            alt: "Vingroup Innovation Foundation",
            label: "Vingroup Innovation Foundation (VINIF) Project Code VINIF.2019.DA19"
          }
        ]
      }
    },
    {
      title: "ScriptingSmith: A Unified Coding Platform for Students and Instructors",
      authors: ["Vatsa S. Patel"],
      year: "2025",
      venue: "EdTech Platform Project",
      journal: "Online IDE & Classroom Management System",
      type: "project",
      link: "https://scriptingsmith.com/",
      doi: "",
      abstract: "ScriptingSmith is a cloud-based coding platform that eliminates setup barriers for students and transforms teaching management for instructors. Students can instantly write code in multiple languages (Python, Java, C++, TypeScript, Go, JavaScript, Rust) with live output and real-time complexity analysis — all within a browser. Educators can create classes, design custom templates, set deadlines, enable group collaboration, and leverage auto-grading with plagiarism detection to streamline evaluation.",
      image: "/scriptingsmith-cover.png",
      keywords: ["Online IDE", "EdTech Platform", "Auto-Grading", "Plagiarism Detection", "FastAPI", "React", "Multi-Language Execution", "Real-Time Collaboration", "AI in Education", "Classroom Management", "Code Education", "Docker", "WebSocket"],
      problem: "Learning to code often starts with a frustrating bottleneck — setting up IDEs, installing compilers, and troubleshooting environments before ever writing a single line of logic. For instructors, the challenge multiplies: managing assignments, detecting plagiarism, grading fairly, and supporting students across multiple languages and systems.",
      motivation: "ScriptingSmith was built to eliminate these barriers. It allows students to start programming instantly — no setup, no installations, just log in and start coding. For educators, ScriptingSmith transforms teaching management: professors can create classes, design custom templates, set deadlines, and even disable copy-paste to preserve academic integrity. Group collaboration enables students to work on projects together in shared workspaces, while auto-grading and plagiarism detection streamline the evaluation process.",
      method: {
        title: "Proposed System & Architecture",
        description: "ScriptingSmith is built as a multi-service, containerized platform with real-time collaboration, high availability, and secure code execution.",
        scenarios: [
          "Frontend Layer (React + TypeScript): Frameworks – React 18, Vite, Tailwind CSS v4, Shadcn UI. Features – Monaco Editor with IntelliSense, syntax highlighting for 7+ languages, live output and complexity panels, authentication UI, Zustand state management. Supports desktop and mobile environments with responsive layout.",
          "Backend Layer (FastAPI + Python): Manages authentication, assignment processing, and code execution routing. Security – JWT tokens, Argon2 + bcrypt hashing, rate limiting, CORS protection. Database – PostgreSQL with Alembic migrations and Redis caching.",
          "Microservices Architecture: Dedicated Docker containers for language-specific execution (Python, Java, C++, Go, TypeScript, JavaScript, Rust). Real-time collaboration via WebSocket service (Node.js + Socket.IO). Auto-scaling deployment on Railway.app with built-in load balancing and SSL.",
          "AI Integration: Python-based plagiarism detection engine analyzes code structure, variable naming, and logic flow to assign a similarity score. Planned extension to ML-based model serving for semantic code understanding."
        ],
        techniques: [
          "Monaco Editor integration with IntelliSense and multi-language syntax highlighting",
          "Secure sandboxed Docker containers with 256 MB memory and 30s timeout limits",
          "Real-time WebSocket collaboration using Socket.IO for concurrent sessions",
          "JWT-based authentication with Argon2 + bcrypt password hashing",
          "PostgreSQL database with Alembic migrations and Redis caching layer",
          "FastAPI backend with rate limiting and CORS protection",
          "AI-powered plagiarism detection analyzing code structure and logic flow",
          "Auto-scaling deployment with health checks and load balancing on Railway.app"
        ]
      },
      evaluation: {
        models: "Multi-service containerized architecture with 7+ language execution environments, real-time collaboration service, and plagiarism detection engine",
        metrics: "Evaluation & Performance: Sub-second code execution response for most languages. Secure sandboxed containers with 256 MB memory and 30s timeout limits. Supports concurrent sessions with low-latency real-time collaboration. Automatic health checks and load balancing for fault tolerance."
      },
      results: [
        "Enabled hundreds of students to write and run code instantly from any device",
        "Simplified instructor workflows through class management, auto-grading, and anti-plagiarism controls",
        "Reduced setup and grading time by over 60% in pilot deployments",
        "Fostered collaboration through shared coding sessions and team projects",
        "Sub-second code execution response for most languages",
        "Supports concurrent sessions with low-latency real-time collaboration",
        "Automatic health checks and load balancing for fault tolerance"
      ],
      contributions: [
        "Designed a full-stack online IDE and classroom management system from scratch",
        "Integrated multi-language real-time execution via secure Docker microservices",
        "Built a scalable FastAPI backend with AI-powered plagiarism analysis",
        "Delivered a student-first, educator-friendly experience bridging learning and assessment",
        "Created secure sandboxed execution environment supporting 7+ programming languages",
        "Implemented real-time collaboration system with WebSocket architecture",
        "Developed auto-grading system with configurable leniency and CSV export"
      ],
      technologies: {
        frameworks: ["React 18", "TypeScript", "FastAPI", "Python", "Node.js", "Vite", "Tailwind CSS v4", "Shadcn UI"],
        tools: ["Monaco Editor", "Socket.IO", "PostgreSQL", "Redis", "Docker", "Railway.app", "JWT", "Argon2", "bcrypt", "Alembic", "Zustand"],
        datasets: ["Student code submissions", "Plagiarism detection training data", "Assignment templates"]
      },
      figures: [
        {
          src: "/scriptingsmith-fig1.png",
          caption: "ScriptingSmith platform interface showing multi-language code editor with live output and real-time collaboration features.",
          section: "problem"
        }
      ]
    },
    {
      title: "Crystal Growth Analysis with Dual-Stage Temporal Convolutional Networks",
      authors: ["Vatsa S. Patel"],
      year: "2021",
      venue: "Research Project",
      journal: "University of Dayton & Silfex (Lam Research)",
      type: "research",
      link: "",
      doi: "",
      abstract: "Crystal growth using the Czochralski method is essential for producing high-purity single crystals used in semiconductors and electronics. However, the process involves multiple intricate stages — from melting and seeding to crowning and body growth — making it difficult to monitor and detect failures in real time. This project aimed to automate the analysis of crystal growth videos to identify each stage accurately and detect early signs of failure — reducing human dependency while improving process precision.",
      image: "/lam-cover.png",
      keywords: ["Crystal Growth", "Temporal CNN", "Dual-Stage Networks", "Video Analysis", "Process Automation", "Semiconductor Manufacturing", "Czochralski Method", "Deep Learning", "Computer Vision"],
      problem: "Crystal growth using the Czochralski method is essential for producing high-purity single crystals used in semiconductors and electronics. However, the process involves multiple intricate stages — from melting and seeding to crowning and body growth — making it difficult to monitor and detect failures in real time. Traditional monitoring relies heavily on human expertise, which is labor-intensive, subjective, and prone to error.",
      motivation: "This project aimed to automate the analysis of crystal growth videos to identify each stage accurately and detect early signs of failure — reducing human dependency while improving process precision.",
      method: {
        title: "Dual-Stage Temporal Convolutional Network (DSTCN) Framework",
        description: "We developed a Dual-Stage Temporal Convolutional Network (DSTCN) framework to analyze video data of crystal growth processes.",
        scenarios: [
          "Stage 1: Detects all eight crystal growth stages: meltdown, stabilization, seeding, necking, crowning, body growth, tailing, and cooling down.",
          "Stage 2: Focuses on the crown and body growth stages, identifying potential failure points that can compromise crystal quality.",
          "The DSTCN model leverages temporal convolutions to capture long-term dependencies and dynamic changes within growth videos, outperforming traditional frame-based analysis methods.",
          "Dataset preprocessing involved converting one-hour videos into labeled 60-second clips."
        ],
        techniques: [
          "Dual-stage temporal convolutional architecture for multi-class stage classification",
          "Binary failure detection for crown and body growth stages",
          "Long-term dependency modeling using temporal convolutions",
          "Video segmentation into 60-second clips for training and inference",
          "Softmax activation for stage classification and sigmoid for failure prediction"
        ]
      },
      evaluation: {
        models: "DSTCN (Dual-Stage Temporal Convolutional Network), baseline TCN, LBP, Tiny Images, HOG",
        metrics: "The model was trained and tested on two baselines: (1) Baseline 1: Multi-class classification across all eight stages. (2) Baseline 2: Success/failure classification for crown and body growth. We compared the DSTCN with traditional approaches — TCN, LBP, Tiny Images, and HOG — using accuracy as the main metric."
      },
      results: [
        "DSTCN achieved double the accuracy of all baseline methods, demonstrating its ability to learn subtle temporal variations",
        "70% classification accuracy, outperforming traditional computer vision and single-stage temporal models",
        "Automated detection of crown and body-stage failures, enabling early intervention",
        "Potential to reduce human monitoring time and labor costs in the Czochralski growth process",
        "Provides new insight into real-time quality control for silicon wafer manufacturing and materials science research",
        "Detects early failures that even human specialists find challenging"
      ],
      contributions: [
        "Introduced the first automated DSTCN framework for crystal growth analysis",
        "Developed a labeled, real-world dataset of Czochralski process videos from Silfex",
        "Demonstrated dual-stage temporal modeling for multi-class and failure prediction tasks",
        "Enabled process automation for semiconductor crystal growth, reducing reliance on expert supervision",
        "Achieved double the accuracy of traditional computer vision approaches"
      ],
      citation: "Patel, V.S., 2021. Crystal Growth Analysis with Dual-Stage Temporal Convolutional Networks. University of Dayton & Silfex (Lam Research).",
      technologies: {
        frameworks: ["Python", "TensorFlow", "OpenCV"],
        neuralNetworks: ["Dual-Stage Temporal CNN", "Temporal Convolutional Networks (TCN)"],
        tools: ["Video segmentation", "Frame-level preprocessing", "Softmax & sigmoid activations"],
        datasets: ["Real-world video dataset from Silfex (Lam Research)"]
      },
      figures: [
        {
          src: "/lam-fig1.png",
          caption: "Eight key stages of the Czochralski crystal growth process with examples of crown and body failures.",
          section: "problem"
        },
        {
          src: "/lam-fig3.png",
          caption: "Two-stage DSTCN architecture for stage classification and failure detection in crystal growth sequences.",
          section: "method"
        },
        {
          src: "/lam-fig4.png",
          caption: "Sample predictions showing successful and failed crown/body stages with DSTCN classifications.",
          section: "results"
        }
      ],
      acknowledgement: {
        text: "This research was supported and collaborated by",
        logos: [
          {
            src: "/Silfex_Logo.jpg",
            alt: "Silfex, Inc. – Division of Lam Research",
            label: "Silfex, Inc. – Division of Lam Research"
          }
        ]
      }
    },
    {
      title: "Masked Face Analysis via Multi-Task Deep Learning",
      authors: ["Vatsa S. Patel", "Zhongliang Nie", "Trung-Nghia Le", "Tam V. Nguyen"],
      year: "2021",
      venue: "Journal of Imaging",
      journal: "Journal of Imaging",
      type: "journal",
      link: "https://www.mdpi.com/2313-433X/7/10/204",
      doi: "https://doi.org/10.3390/jimaging7100204",
      volume: "7",
      issue: "204",
      pages: "1-11",
      abstract: "The COVID-19 pandemic introduced a new visual challenge: people wearing masks obscure critical facial regions used by computer vision systems. This research builds a masked-face dataset (FGNET-MASK) and a multi-task deep learning model that can simultaneously predict age, gender, and facial expression from partially occluded faces. The proposed MTDL-ResNet152 achieved up to 98% accuracy in gender, 95% in age, and 90% in emotion classification.",
      image: "/mfa-cover.png",
      keywords: ["Masked Face", "Multi-Task Learning", "Deep Learning", "Age Prediction", "Gender Classification", "Emotion Recognition", "FGNET-MASK", "CNN", "ResNet-152"],
      problem: "The COVID-19 pandemic introduced a new visual challenge: people wearing masks obscure critical facial regions used by computer vision systems. Conventional facial-analysis algorithms—built for full faces—suddenly failed at identifying age, gender, or emotion.",
      motivation: "This research addresses that gap by building a masked-face dataset and a multi-task deep learning model that can simultaneously predict age, gender, and facial expression from partially occluded faces. The goal: to help real-world applications (security, retail analytics, healthcare, and smart mirrors) operate reliably even under mask-wearing conditions.",
      method: {
        title: "Multi-Task Deep Learning Framework",
        description: "The team built a new dataset (FGNET-MASK) and developed a shared-encoder, multi-head architecture for simultaneous age, gender, and expression prediction",
        scenarios: [
          "Dataset Creation — FGNET-MASK: Built from FG-NET Aging dataset (926 images) with synthetic mask rendering",
          "Landmark detection using OpenPose (69 key points)",
          "Mask synthesis via Python Pillow with varied colors and logos",
          "Labels: Age (<10, 10–20, 20–40, >40), Gender (M/F), Expression (Happy, Neutral, Unhappy)",
          "Total images: 3,404 (augmented 4× to balance classes)"
        ],
        techniques: [
          "Hard parameter sharing: common convolutional backbone (CNN or ResNet-152)",
          "Separate fully connected heads for age, gender, and expression",
          "Loss function: L = L_age + L_gender + L_expression",
          "Backbones: Simple CNN (7.6K parameters) and ResNet-152 (60M parameters, fine-tuned from ImageNet)"
        ]
      },
      evaluation: {
        models: "LBP + SVM, Eigenfaces + SVM, TinyImage, VGG Face, Single CNN, Single ResNet-152, MTDL CNN, MTDL ResNet-152",
        metrics: "<strong>Hardware:</strong> NVIDIA GPU (donated by NVIDIA Corp.)<br><strong>Metrics:</strong> Classification accuracy for age, gender, and expression<br><strong>Baselines:</strong> Traditional methods (Eigenfaces, LBP) and deep backbones (VGG Face, ResNet)"
      },
      results: [
        "The proposed MTDL-ResNet152 achieved up to 98% accuracy in gender, 95% in age, and 90% in emotion classification — the best among all tested baselines",
        "Multi-task learning outperforms all single models while reducing training time and data redundancy",
        "Deeper backbones (ResNet-152) show superior generalization",
        "MTDL yields more stable predictions under mask occlusion"
      ],
      contributions: [
        "FGNET-MASK: A new 3,404-image dataset of synthetically masked faces labeled for age, gender, and emotion",
        "Unified Multi-Task Model: Shared-encoder design achieving high accuracy across all facial attributes",
        "Comprehensive Comparison: Benchmarked traditional SVM and deep backbones",
        "Real-world Relevance: Enables robust performance in surveillance, retail, and human–computer interaction systems during mask-wearing scenarios"
      ],
      citation: `@article{patel2021masked,
  title={Masked Face Analysis via Multi-Task Deep Learning},
  author={Patel, Vatsa S. and Nie, Zhongliang and Le, Trung-Nghia and Nguyen, Tam V.},
  journal={Journal of Imaging},
  volume={7},
  number={10},
  pages={204},
  year={2021},
  publisher={MDPI}
}`,
      technologies: {
        frameworks: ["TensorFlow", "Keras", "PyTorch"],
        classification: ["CNN", "ResNet-152", "SVM"],
        tools: ["OpenPose", "Pillow", "NumPy", "Scikit-learn"],
        hardware: ["NVIDIA GPU (CUDA)"]
      },
      figures: [
        {
          src: "/mfa-fig1.png",
          caption: "The proposed system predicts age, gender, and emotion from a masked face.",
          section: "problem"
        },
        {
          src: "/mfa-fig2.png",
          caption: "Single-task vs. multi-task architectures — MTDL shares encoder weights across all three prediction heads.",
          section: "method"
        },
        {
          src: "/mfa-fig3.png",
          caption: "FGNET-MASK dataset creation: from landmark detection to synthetic mask overlay and labeling.",
          section: "method"
        },
        {
          src: "/mfa-fig4.png",
          caption: "Predictions from the MTDL model — green denotes correct predictions for age, gender, and expression.",
          section: "results"
        }
      ],
      acknowledgement: {
        text: "This research was supported by",
        logos: [
          {
            src: "/NSF_logo.png",
            alt: "National Science Foundation",
            label: "National Science Foundation (NSF) Grant No. 2025234"
          },
          {
            src: "/mfa-ack.png",
            alt: "Japan Society for the Promotion of Science",
            label: "JSPS (KAKENHI JP20K23355 and JP21K18023)"
          },
          {
            src: "/mfa-ack1.jpg",
            alt: "NVIDIA Corporation",
            label: "NVIDIA Corporation GPU Donation"
          }
        ]
      }
    }
  ],


  skills: {
    programming: ["Python", "JavaScript", "TypeScript", "Java", "C++", "R", "MATLAB"],
    frameworks: ["PyTorch", "TensorFlow", "React", "Node.js", "Flask", "Django"],
    tools: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter", "Linux"],
    domains: ["Machine Learning", "Computer Vision", "Deep Learning", "Data Science", "Web Development"]
  }
};


export type PortfolioData = typeof portfolioData;
