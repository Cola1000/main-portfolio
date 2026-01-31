export const papers = [
  {
    title: "How Eigenvalues and Gaussian Methods Intersect in making Anime and VTuber Multi-Perspective Production",
    date: "January 2025",
    description:
        "Tree-based data structures such as Octrees, BRLO-Trees, and Bounding Volume Hierarchies (BVH) play a key role in managing visual complexity in anime and VTuber content production. By organizing 3D spatial data hierarchically, these structures enable efficient real-time rendering, dynamic object management, and effective Level-of-Detail (LOD) control. Mathematical techniques, including eigenvalue decomposition and Gaussian sampling, further enhance transformations and selective rendering, improving computational efficiency and visual quality. This paper analyzes the effectiveness of these approaches in high-action anime scenes and large-scale interactive VTuber environments, presenting experimental results that demonstrate improved performance, flexibility, and user immersion in modern 3D production pipelines.",  
    tags: ["3D Rendering", "VTuber", "Anime Production", "Eigenvalues", "Gaussian Methods", "Tree-based Data Structures", "LOD Strategies"],
    links: [
      { label: "Read", href: "https://informatika.stei.itb.ac.id/~rinaldi.munir/AljabarGeometri/2024-2025/Makalah/Makalah-IF2123-Algeo-2024%20(58).pdf" },
    ],
  },
  {
    title: "Making 3D-to-2D Using Toon Shading via Branch-and-Bound Spatial Pruning",
    date: "June 2025",
    description:
        "Toon shading is a non-photorealistic rendering technique that stylizes 3D scenes into cartoon-like visuals. This paper presents a branch-and-bound approach using 3D spatial partitioning to approximate traditional toon shading. By pruning regions with minimal color and lighting variation, the method significantly reduces required light bounces, achieving up to a 64% reduction in render time with no perceptible loss in visual quality. The resulting trade-off makes the technique well suited for real-time rendering and rapid production workflows.",  
    tags: ["Toon Shading", "Branch-and-Bound", "3D Spatial Partitioning", "Cartoon-style Rendering", "Light-bounce Pruning"],
    links: [
      { label: "Read", href: "https://informatika.stei.itb.ac.id/~rinaldi.munir/Stmik/2024-2025/Makalah2025/Makalah-IF2211-Strategi-Algoritma-2025%20(2).pdf" },
      { label: "Demo", href: "https://youtu.be/9ED-Wp5olRM?si=VU86Hv0E7wSJMqvV" },
    ],
  },
  {
    title: "Arch Linux Installation",
    date: "August 2025",
    description:
      "This guide walks a first-time Linux user through a manual Arch Linux installation (UEFI/GPT) without the graphical installer. You'll create a bootable USB, partition and format disks, mount and generate fstab, and install a minimal base system with pacstrap. Then we configure timezone, locale, users and sudo, networking, and set up GRUB to boot. After first boot we add a friendly desktop (KDE Plasma), essential tools, and AUR support with yay, plus some quality-of-life checks and safe cleanup commands. Optional chapters introduce networking hardening (DoH + firewall), virtualization/containers, Wine, and ricing idea(s).",
    tags: ["Linux", "Arch Linux", "Installation", "UEFI", "GPT", "KDE Plasma", "Networking", "Virtualization", "Wine"],
    links: [
      { label: "Read", href: "/main-portfolio/How to Install Arch Linux.pdf" },
    ],
  },
    {
    title: "Loli ni Tensei Konjou Saikou ni Naru",
    date: "May 2021",
    description:
      "My personal light novel about a girl and her classmates who got transported to a fantasy world. It is written fully in English.",
    tags: ["Isekai", "Anime", "Light Novel", "Fantasy", "Action"],
    links: [
      { label: "Read", href: "/main-portfolio/Vol.1 Ver. 1.2 PDF.pdf" },
    ],
  },
];
