const worksData = {
  projects: [
    {
      title: "Humanity & Kardashev 1",
      description: "Tracking humanity's race to becoming a Type 1 Kardashev civilization",
      image: "images/projects/k1.png",
      github: "https://kesharis.github.io/kardashev1/",
      label: "Web Project"
    },
    {
      title: "Charger Design for Light EVs",
      description: "AC charger with interleaved boost PFC + PSFB topology. Fabricated and tested in hardware. Won the Systems Society Award for Best Thesis.",
      image: "images/projects/p1.jpg",
      github: "https://github.com/keshariS/charger4LightEVs",
      label: "Bachelors Dissertation"
    },
    {
      title: "CV-Assisted Emotion Analysis",
      description: "Facial asymmetry measurement using CNNs. Improved emotion recognition from 70% to 87%. Built GUI for deployment on AWS.",
      image: "images/projects/p2.jpg",
      github: "https://github.com/keshariS/EmotionAnalysis",
      label: "Research Project"
    }
  ],
  papers: [
    {
      title: "From Prejudice to Parity: A New Approach to Debiasing Large Language Model Word Embeddings",
      year: "2025",
      venue: "COLING 2025",
      abstract: "Embeddings play a pivotal role in the efficacy of large language models. They are the bedrock on which these models grasp contextual relationships and foster a more nuanced understanding of language. Given that these embeddings often reflect or exhibit bias, it stands to reason that these models may inadvertently learn this bias. In this work, we propose DeepSoftDebias, an algorithm that uses a neural network to perform 'soft debiasing'. We exhaustively evaluate this algorithm across a variety of state-of-the-art datasets, accuracy metrics, and challenging NLP tasks. On a wide range of metrics, we find that DeepSoftDebias outperforms current state-of-the-art methods at reducing bias across gender, race, and religion.",
      pdf: "https://aclanthology.org/2025.coling-main.450.pdf",
      scholar: "https://scholar.google.com/citations?user=LVdUDqIAAAAJ&hl=en",
      doi: "https://aclanthology.org/2025.coling-main.450/"
    },
    {
      title: "Born with a SilverSpoon? Investigating Socioeconomic Bias in LLMs",
      year: "2025",
      venue: "NeurIPS 2025 Workshop on Evaluating the Evolving LLM Lifecycle",
      abstract: "Socioeconomic bias in society exacerbates disparities, influencing access to opportunities and resources based on individuals' economic and social backgrounds. In this paper, we investigate the presence of socioeconomic bias in large language models. We introduce a novel dataset, SilverSpoon, consisting of 3000 samples that illustrate hypothetical scenarios involving underprivileged people performing ethically ambiguous actions, and ask whether the action is ethically justified. Using SilverSpoon, we evaluate the degree of socioeconomic bias in large language models and its variation as a function of model size. Our analysis reveals that while humans disagree on which situations require empathy toward the underprivileged, most large language models are unable to empathize with the socioeconomically underprivileged regardless of the situation.",
      pdf: "https://openreview.net/pdf?id=5WKuxSScJG",
      scholar: "https://scholar.google.com/citations?user=LVdUDqIAAAAJ&hl=en",
      doi: "https://openreview.net/forum?id=5WKuxSScJG"
    },
    {
      title: "Categorizing E-Cigarette-related Tweets using BERT Topic Modeling",
      year: "2024",
      venue: "Emerging Trends in Drugs, Addictions, and Health · Elsevier",
      abstract: "This work presents a machine learning pipeline for analyzing e-cigarette-related discourse on Twitter. Using BERT-based topic modeling, we categorize large volumes of social media content to study ENDS (Electronic Nicotine Delivery Systems) exposure patterns among young adults. Our approach leverages custom-trained language models and cloud-based infrastructure to process and classify tweets at scale, providing public health researchers with actionable insights into youth exposure to tobacco marketing.",
      pdf: "https://www.sciencedirect.com/science/article/pii/S2667118224000199?via%3Dihub",
      poster: "files/posters/ecigs-bert.pdf",
      posterLabel: "SRNT 2024 Poster",
      scholar: "https://scholar.google.com/citations?user=LVdUDqIAAAAJ&hl=en",
      doi: "https://doi.org/10.1016/j.etdah.2024.100160"
    },
    {
      title: "Computer Vision Models for Detecting Large Cigars on Social Media",
      year: "2023",
      venue: "Nicotine & Tobacco Research · Oxford University Press",
      abstract: "We present a computer vision system for detecting large cigars in social media images, addressing a gap in automated tobacco product surveillance. Using a custom-trained YOLO-based object detection model, the system identifies and classifies large cigars with high accuracy across diverse real-world image conditions. This work supports epidemiological research into tobacco product marketing and youth exposure, enabling large-scale analysis of visual social media content without manual labeling.",
      pdf: "https://academic.oup.com/ntr/article-abstract/28/5/873/8284960",
      poster: "files/posters/cigar-detection.pdf",
      posterLabel: "SRNT 2023 Poster",
      scholar: "https://scholar.google.com/citations?user=LVdUDqIAAAAJ&hl=en",
      doi: "https://doi.org/10.1093/ntr/ntaf206"
    },

  ]
};
