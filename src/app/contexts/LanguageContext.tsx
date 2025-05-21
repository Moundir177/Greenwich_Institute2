"use client";

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Record<string, string>> = {
  en: {
    // General
    'back_to_courses': 'Back to Courses',
    'instructor': 'Instructor',
    'students_enrolled': 'students enrolled',
    'reviews': 'reviews',
    'duration': 'Duration',
    'level': 'Level',
    'starts': 'Starts',
    'enroll_now': 'Enroll Now',
    'continue_learning': 'Continue Learning',
    'add_to_wishlist': 'Add to Wishlist',
    'added_to_wishlist': 'Added to Wishlist',
    'share': 'Share',
    'course_includes': 'This course includes:',
    'video_content': '40+ hours of video content',
    'course_materials': 'Comprehensive course materials',
    'downloadable_resources': 'Downloadable resources',
    'live_qa': 'Live Q&A sessions',
    'certificate_completion': 'Certificate of completion',
    'preview_certificate': 'Preview Certificate',
    'watch_preview': 'Watch Course Preview',
    
    // Navigation
    'home': 'Home',
    'about': 'About',
    'courses': 'Courses',
    'services': 'Services',
    'certificates': 'Certificates',
    'certifications': 'Certifications',
    'contact': 'Contact',
    'our_story': 'Our Story',
    'mission_values': 'Mission & Values',
    'leadership_team': 'Leadership Team',
    'campus_facilities': 'Campus Facilities',
    'all_courses': 'All Courses',
    'business': 'Business',
    'technology': 'Technology',
    'design': 'Design',
    'finance': 'Finance',
    'career_counseling': 'Career Counseling',
    'academic_support': 'Academic Support',
    'international_students': 'International Students',
    'online_learning': 'Online Learning',
    'search': 'Search',
    'search_placeholder': 'Search...',
    'login': 'Login',
    'menu': 'Menu',
    'news_events': 'News & Events',
    'partnerships': 'Partnerships',
    
    // Tabs
    'overview': 'Overview',
    'syllabus': 'Syllabus',
    'instructor_tab': 'Instructor',
    'reviews_tab': 'Reviews',
    'faq': 'FAQ',
    'resources': 'Resources',
    'discussion': 'Discussion',
    'quizzes': 'Quizzes',
    
    // Overview
    'course_overview': 'Course Overview',
    'what_youll_learn': 'What You\'ll Learn',
    'requirements': 'Requirements',
    
    // Enrollment
    'enroll_in_course': 'Enroll in Course',
    'full_name': 'Full Name',
    'email_address': 'Email Address',
    'phone_number': 'Phone Number',
    'payment_method': 'Payment Method',
    'cancel': 'Cancel',
    'complete_enrollment': 'Complete Enrollment',
    
    // Certificate
    'certificate_of_completion': 'Certificate of Completion',
    'this_is_to_certify': 'This is to certify that',
    'has_completed': 'has successfully completed the course',
    'date': 'Date',
    'certificate_id': 'Certificate ID',
    'complete_to_earn': 'Complete this course to earn your certificate.',
    'close_preview': 'Close Preview',
    'certificate_verification': 'This certificate verifies the completion of {duration} of instruction in {category}.',
    
    // Progress
    'your_progress': 'Your Progress',
    'mark_next_module': 'Mark Next Module Complete',
    'course_completed': 'Course Completed',
    'go_to_my_courses': 'Go to My Courses',
    
    // Analytics
    'your_course_analytics': 'Your Course Analytics',
    'progress': 'Progress',
    'performance': 'Performance',
    'engagement': 'Engagement',
    'schedule': 'Schedule',
    'completion': 'Completion',
    'average_quiz_score': 'Average Quiz Score',
    'time_spent': 'Time Spent',
    'last_activity': 'Last Activity',
    'module_completion': 'Module Completion',
    'view_detailed_report': 'View detailed progress report',
    
    // Learning Path
    'personalized_learning_path': 'Personalized Learning Path',
    'take_assessment': 'Take this quick assessment to discover your optimal learning path.',
    'customize_experience': 'We\'ll customize your course experience based on your learning preferences.',
    'generate_path': 'Generate My Learning Path',
    'your_learning_style': 'Your Learning Style',
    'recommended_path': 'Your Recommended Learning Path',
    'retake_assessment': 'Retake Assessment',
    'start_path': 'Start This Path',
    
    // Discussion
    'discussion_forum': 'Discussion Forum',
    'start_new_thread': 'Start New Thread',
    'reply': 'Reply',
    'replies': 'Replies',
    'add_reply': 'Add a reply...',
    'post_reply': 'Post Reply',
    
    // CTA
    'ready_to_start': 'Ready to Start Your Learning Journey?',
    'join_thousands': 'Join thousands of students who have already enrolled in this course and take the next step in your career development.',
    'contact_admissions': 'Contact Admissions',
    
    // Language selector
    'language': 'Language',
    'english': 'English',
    'french': 'French',
    'arabic': 'Arabic',
    
    // Related courses
    'related_courses': 'Related Courses',
    'view_course': 'View Course',

    // Loading and errors
    'loading_course': 'Loading course information...',
    'course_not_found': 'Course Not Found',
    'course_not_exist': 'The course you\'re looking for doesn\'t exist or has been removed.',
    'browse_all_courses': 'Browse All Courses',

    // Enrollment form
    'credit_card': 'Credit Card',
    'bank_transfer': 'Bank Transfer',
    'enrollment_successful': 'Enrollment successful! Check your email for confirmation.',

    // Home Page Hero
    'hero_title': 'Unlock Your Potential with World-Class Education',
    'hero_title_highlight': 'Learn Without Limits',
    'hero_description': 'Discover a transformative learning experience designed to empower your career and personal growth with expert-led courses and cutting-edge resources.',
    'explore_courses': 'Explore Courses',
    'watch_intro': 'Watch Introduction',
    'students_globally': 'Students Globally',
    'hero_image_alt': 'Students in a modern learning environment',
    'accreditation_title': 'Fully Accredited Programs',
    'accreditation_text': 'All our courses are recognized by top international education bodies and employers.',
    
    // Featured Courses Section
    'featured_courses': 'Featured Courses',
    'featured_courses_description': 'Explore our most popular and highly-rated courses across various disciplines.',
    'all': 'All',
    'marketing': 'Marketing',
    'price': 'Price',
    'view_all_courses': 'View All Courses',
    'expand_your_knowledge': 'Expand Your Knowledge',
    
    // Testimonials Section
    'testimonials': 'Testimonials',
    'what_students_say': 'What Our Students Say',
    'about_us': 'About Us',
    'testimonials_description': 'Discover how our programs have helped students achieve their academic and professional goals.',
    'join_community': 'Join Our Community',
    'join_community_description': 'Experience world-class education and join thousands of successful alumni worldwide.',
    'learn_more': 'Learn More',
    'students_campus_alt': 'Students at our campus',
    
    // Call to Action Section
    'cta_title': 'Ready to Start Your Learning Journey?',
    'cta_subtitle': 'Join Our Global Learning Community',
    'cta_description': 'Take the first step towards transforming your career with our world-class educational programs. Get personalized guidance from industry experts.',
    'cta_benefit_1': 'Flexible learning options to fit your schedule',
    'cta_benefit_2': 'One-on-one career coaching and mentorship',
    'cta_benefit_3': 'Industry-recognized certifications',
    'cta_benefit_4': 'Global network of alumni and industry connections',
    'request_info_title': 'Request More Information',
    'thank_you': 'Thank You!',
    'form_success': 'We\'ve received your request. A member of our team will contact you shortly.',
    'area_of_interest': 'Area of Interest',
    'select_option': 'Select an option',
    'request_info': 'Request Information',
    'privacy_notice': 'By submitting this form, you agree to our privacy policy and terms of service.',
    'join_our_community': 'Join Our Community',
    'enter_your_name': 'Enter your full name',
    'enter_your_email': 'Enter your email address',
    'enter_your_phone': 'Enter your phone number',
    
    // Stats Section
    'stats_title': 'Our Impact By The Numbers',
    'stats_description': 'We\'re proud of our global reach and the success of our students. Here\'s a glimpse of our impact.',
    'stats_courses': 'Courses Available',
    'stats_students': 'Students Enrolled',
    'stats_countries': 'Countries Represented',
    'stats_satisfaction': 'Student Satisfaction',
    'our_impact': 'Our Impact',
    
    // Login and Authentication
    'login_to_your_account': 'Login to Your Account',
    'access_your_courses_and_materials': 'Access your courses, progress tracking, and learning materials',
    'password': 'Password',
    'remember_me': 'Remember me',
    'forgot_your_password': 'Forgot your password?',
    'sign_in': 'Sign In',
    'signing_in': 'Signing In...',
    'dont_have_account': 'Don\'t have an account? ',
    'create_account': 'Create Account',
    'back_to_home': 'Back to Home',
  },
  fr: {
    // General
    'back_to_courses': 'Retour aux Cours',
    'instructor': 'Instructeur',
    'students_enrolled': 'étudiants inscrits',
    'reviews': 'avis',
    'duration': 'Durée',
    'level': 'Niveau',
    'starts': 'Commence le',
    'enroll_now': 'S\'inscrire Maintenant',
    'continue_learning': 'Continuer l\'Apprentissage',
    'add_to_wishlist': 'Ajouter à la Liste de Souhaits',
    'added_to_wishlist': 'Ajouté à la Liste de Souhaits',
    'share': 'Partager',
    'course_includes': 'Ce cours comprend:',
    'video_content': '40+ heures de contenu vidéo',
    'course_materials': 'Matériel de cours complet',
    'downloadable_resources': 'Ressources téléchargeables',
    'live_qa': 'Sessions de Q&R en direct',
    'certificate_completion': 'Certificat d\'achèvement',
    'preview_certificate': 'Aperçu du Certificat',
    'watch_preview': 'Regarder l\'Aperçu du Cours',
    
    // Navigation
    'home': 'Accueil',
    'about': 'À Propos',
    'courses': 'Cours',
    'services': 'Services',
    'certificates': 'Certificats',
    'certifications': 'Accréditations',
    'contact': 'Contact',
    'our_story': 'Notre Histoire',
    'mission_values': 'Mission & Valeurs',
    'leadership_team': 'Équipe de Direction',
    'campus_facilities': 'Installations du Campus',
    'all_courses': 'Tous les Cours',
    'business': 'Affaires',
    'technology': 'Technologie',
    'design': 'Design',
    'finance': 'Finance',
    'career_counseling': 'Orientation Professionnelle',
    'academic_support': 'Soutien Académique',
    'international_students': 'Étudiants Internationaux',
    'online_learning': 'Apprentissage en Ligne',
    'search': 'Rechercher',
    'search_placeholder': 'Rechercher...',
    'login': 'Connexion',
    'menu': 'Menu',
    'news_events': 'Actualités & Événements',
    'partnerships': 'Partenariats',
    
    // Tabs
    'overview': 'Aperçu',
    'syllabus': 'Programme',
    'instructor_tab': 'Instructeur',
    'reviews_tab': 'Avis',
    'faq': 'FAQ',
    'resources': 'Ressources',
    'discussion': 'Discussion',
    'quizzes': 'Quiz',
    
    // Overview
    'course_overview': 'Aperçu du Cours',
    'what_youll_learn': 'Ce Que Vous Apprendrez',
    'requirements': 'Prérequis',
    
    // Enrollment
    'enroll_in_course': 'S\'inscrire au Cours',
    'full_name': 'Nom Complet',
    'email_address': 'Adresse Email',
    'phone_number': 'Numéro de Téléphone',
    'payment_method': 'Méthode de Paiement',
    'cancel': 'Annuler',
    'complete_enrollment': 'Compléter l\'Inscription',
    
    // Certificate
    'certificate_of_completion': 'Certificat d\'Achèvement',
    'this_is_to_certify': 'Ceci certifie que',
    'has_completed': 'a complété avec succès le cours',
    'date': 'Date',
    'certificate_id': 'ID du Certificat',
    'complete_to_earn': 'Complétez ce cours pour obtenir votre certificat.',
    'close_preview': 'Fermer l\'Aperçu',
    'certificate_verification': 'Ce certificat atteste l\'achèvement de {duration} d\'enseignement en {category}.',
    
    // Progress
    'your_progress': 'Votre Progression',
    'mark_next_module': 'Marquer le Module Suivant Terminé',
    'course_completed': 'Cours Terminé',
    'go_to_my_courses': 'Aller à Mes Cours',
    
    // Analytics
    'your_course_analytics': 'Vos Analyses de Cours',
    'progress': 'Progression',
    'performance': 'Performance',
    'engagement': 'Engagement',
    'schedule': 'Calendrier',
    'completion': 'Achèvement',
    'average_quiz_score': 'Score Moyen des Quiz',
    'time_spent': 'Temps Passé',
    'last_activity': 'Dernière Activité',
    'module_completion': 'Complétion des Modules',
    'view_detailed_report': 'Voir le rapport détaillé de progression',
    
    // Learning Path
    'personalized_learning_path': 'Parcours d\'Apprentissage Personnalisé',
    'take_assessment': 'Faites cette évaluation rapide pour découvrir votre parcours d\'apprentissage optimal.',
    'customize_experience': 'Nous personnaliserons votre expérience de cours en fonction de vos préférences d\'apprentissage.',
    'generate_path': 'Générer Mon Parcours d\'Apprentissage',
    'your_learning_style': 'Votre Style d\'Apprentissage',
    'recommended_path': 'Votre Parcours d\'Apprentissage Recommandé',
    'retake_assessment': 'Reprendre l\'Évaluation',
    'start_path': 'Commencer Ce Parcours',
    
    // Discussion
    'discussion_forum': 'Forum de Discussion',
    'start_new_thread': 'Démarrer un Nouveau Sujet',
    'reply': 'Répondre',
    'replies': 'Réponses',
    'add_reply': 'Ajouter une réponse...',
    'post_reply': 'Publier la Réponse',
    
    // CTA
    'ready_to_start': 'Prêt à Commencer Votre Parcours d\'Apprentissage?',
    'join_thousands': 'Rejoignez des milliers d\'étudiants qui se sont déjà inscrits à ce cours et franchissez la prochaine étape de votre développement professionnel.',
    'contact_admissions': 'Contacter les Admissions',
    
    // Language selector
    'language': 'Langue',
    'english': 'Anglais',
    'french': 'Français',
    'arabic': 'Arabe',
    
    // Related courses
    'related_courses': 'Cours Connexes',
    'view_course': 'Voir le Cours',

    // Loading and errors
    'loading_course': 'Chargement des informations du cours...',
    'course_not_found': 'Cours Introuvable',
    'course_not_exist': 'Le cours que vous recherchez n\'existe pas ou a été supprimé.',
    'browse_all_courses': 'Parcourir Tous les Cours',

    // Enrollment form
    'credit_card': 'Carte de Crédit',
    'bank_transfer': 'Virement Bancaire',
    'enrollment_successful': 'Inscription réussie ! Vérifiez votre e-mail pour la confirmation.',

    // Home Page Hero
    'hero_title': 'Libérez Votre Potentiel avec une Éducation de Classe Mondiale',
    'hero_title_highlight': 'Apprenez Sans Limites',
    'hero_description': 'Découvrez une expérience d\'apprentissage transformative conçue pour développer votre carrière et votre croissance personnelle avec des cours dirigés par des experts et des ressources de pointe.',
    'explore_courses': 'Explorer les Cours',
    'watch_intro': 'Regarder l\'Introduction',
    'students_globally': 'Étudiants dans le Monde',
    'hero_image_alt': 'Étudiants dans un environnement d\'apprentissage moderne',
    'accreditation_title': 'Programmes Entièrement Accrédités',
    'accreditation_text': 'Tous nos cours sont reconnus par les meilleurs organismes internationaux d\'éducation et les employeurs.',
    
    // Featured Courses Section
    'featured_courses': 'Cours en Vedette',
    'featured_courses_description': 'Explorez nos cours les plus populaires et les mieux notés dans différentes disciplines.',
    'all': 'Tous',
    'marketing': 'Marketing',
    'price': 'Prix',
    'view_all_courses': 'Voir Tous les Cours',
    'expand_your_knowledge': 'Développez Vos Connaissances',
    
    // Testimonials Section
    'testimonials': 'Témoignages',
    'what_students_say': 'Ce que Disent Nos Étudiants',
    'about_us': 'À Propos de Nous',
    'testimonials_description': 'Découvrez comment nos programmes ont aidé nos étudiants à atteindre leurs objectifs académiques et professionnels.',
    'join_community': 'Rejoignez Notre Communauté',
    'join_community_description': 'Découvrez une éducation de classe mondiale et rejoignez des milliers d\'anciens élèves dans le monde entier.',
    'learn_more': 'En Savoir Plus',
    'students_campus_alt': 'Étudiants sur notre campus',
    
    // Call to Action Section
    'cta_title': 'Prêt à Commencer Votre Parcours d\'Apprentissage?',
    'cta_subtitle': 'Rejoignez Notre Communauté Mondiale d\'Apprentissage',
    'cta_description': 'Faites le premier pas vers la transformation de votre carrière avec nos programmes éducatifs de classe mondiale. Obtenez des conseils personnalisés d\'experts de l\'industrie.',
    'cta_benefit_1': 'Options d\'apprentissage flexibles pour s\'adapter à votre emploi du temps',
    'cta_benefit_2': 'Coaching de carrière et mentorat individuels',
    'cta_benefit_3': 'Certifications reconnues par l\'industrie',
    'cta_benefit_4': 'Réseau mondial d\'anciens élèves et de connexions industrielles',
    'request_info_title': 'Demander Plus d\'Informations',
    'thank_you': 'Merci!',
    'form_success': 'Nous avons reçu votre demande. Un membre de notre équipe vous contactera sous peu.',
    'area_of_interest': 'Domaine d\'Intérêt',
    'select_option': 'Sélectionnez une option',
    'request_info': 'Demander des Informations',
    'privacy_notice': 'En soumettant ce formulaire, vous acceptez notre politique de confidentialité et nos conditions de service.',
    'join_our_community': 'Rejoignez Notre Communauté',
    'enter_your_name': 'Entrez votre nom complet',
    'enter_your_email': 'Entrez votre adresse e-mail',
    'enter_your_phone': 'Entrez votre numéro de téléphone',
    
    // Stats Section
    'stats_title': 'Notre Impact en Chiffres',
    'stats_description': 'Nous sommes fiers de notre portée mondiale et du succès de nos étudiants. Voici un aperçu de notre impact.',
    'stats_courses': 'Cours Disponibles',
    'stats_students': 'Étudiants Inscrits',
    'stats_countries': 'Pays Représentés',
    'stats_satisfaction': 'Satisfaction des Étudiants',
    'our_impact': 'Notre Impact',
    
    // Login and Authentication
    'login_to_your_account': 'Connectez-vous à Votre Compte',
    'access_your_courses_and_materials': 'Accédez à vos cours, suivi de progression et matériels d\'apprentissage',
    'password': 'Mot de Passe',
    'remember_me': 'Se souvenir de moi',
    'forgot_your_password': 'Mot de passe oublié?',
    'sign_in': 'Se Connecter',
    'signing_in': 'Connexion en cours...',
    'dont_have_account': 'Vous n\'avez pas de compte? ',
    'create_account': 'Créer un Compte',
    'back_to_home': 'Retour à l\'Accueil',
  },
  ar: {
    // General - Arabic text is right-to-left
    'back_to_courses': 'العودة إلى الدورات',
    'instructor': 'المدرب',
    'students_enrolled': 'الطلاب المسجلين',
    'reviews': 'المراجعات',
    'duration': 'المدة',
    'level': 'المستوى',
    'starts': 'يبدأ في',
    'enroll_now': 'سجل الآن',
    'continue_learning': 'استمر في التعلم',
    'add_to_wishlist': 'أضف إلى قائمة الرغبات',
    'added_to_wishlist': 'تمت الإضافة إلى قائمة الرغبات',
    'share': 'مشاركة',
    'course_includes': 'تشمل هذه الدورة:',
    'video_content': '+40 ساعة من محتوى الفيديو',
    'course_materials': 'مواد دراسية شاملة',
    'downloadable_resources': 'موارد قابلة للتنزيل',
    'live_qa': 'جلسات أسئلة وأجوبة مباشرة',
    'certificate_completion': 'شهادة إتمام',
    'preview_certificate': 'معاينة الشهادة',
    'watch_preview': 'مشاهدة معاينة الدورة',
    
    // Navigation
    'home': 'الرئيسية',
    'about': 'حول',
    'courses': 'الدورات',
    'services': 'الخدمات',
    'certificates': 'الشهادات',
    'certifications': 'الاعتمادات',
    'contact': 'اتصل بنا',
    'our_story': 'قصتنا',
    'mission_values': 'المهمة والقيم',
    'leadership_team': 'فريق القيادة',
    'campus_facilities': 'مرافق الحرم الجامعي',
    'all_courses': 'جميع الدورات',
    'business': 'الأعمال',
    'technology': 'التكنولوجيا',
    'design': 'التصميم',
    'finance': 'المالية',
    'career_counseling': 'الإرشاد المهني',
    'academic_support': 'الدعم الأكاديمي',
    'international_students': 'الطلاب الدوليين',
    'online_learning': 'التعلم عبر الإنترنت',
    'search': 'بحث',
    'search_placeholder': 'ابحث...',
    'login': 'تسجيل الدخول',
    'menu': 'القائمة',
    'news_events': 'الأخبار والأحداث',
    'partnerships': 'الشراكات',
    
    // Tabs
    'overview': 'نظرة عامة',
    'syllabus': 'المنهج',
    'instructor_tab': 'المدرب',
    'reviews_tab': 'المراجعات',
    'faq': 'الأسئلة الشائعة',
    'resources': 'الموارد',
    'discussion': 'المناقشة',
    'quizzes': 'الاختبارات',
    
    // Overview
    'course_overview': 'نظرة عامة على الدورة',
    'what_youll_learn': 'ما ستتعلمه',
    'requirements': 'المتطلبات',
    
    // Enrollment
    'enroll_in_course': 'التسجيل في الدورة',
    'full_name': 'الاسم الكامل',
    'email_address': 'البريد الإلكتروني',
    'phone_number': 'رقم الهاتف',
    'payment_method': 'طريقة الدفع',
    'cancel': 'إلغاء',
    'complete_enrollment': 'إكمال التسجيل',
    
    // Certificate
    'certificate_of_completion': 'شهادة إتمام',
    'this_is_to_certify': 'نشهد أن',
    'has_completed': 'قد أكمل بنجاح دورة',
    'date': 'التاريخ',
    'certificate_id': 'رقم الشهادة',
    'complete_to_earn': 'أكمل هذه الدورة للحصول على شهادتك.',
    'close_preview': 'إغلاق المعاينة',
    'certificate_verification': 'تشهد هذه الشهادة بإتمام {duration} من التعليم في {category}.',
    
    // Progress
    'your_progress': 'تقدمك',
    'mark_next_module': 'وضع علامة على الوحدة التالية كمكتملة',
    'course_completed': 'تم إكمال الدورة',
    'go_to_my_courses': 'الذهاب إلى دوراتي',
    
    // Analytics
    'your_course_analytics': 'تحليلات الدورة الخاصة بك',
    'progress': 'التقدم',
    'performance': 'الأداء',
    'engagement': 'المشاركة',
    'schedule': 'الجدول',
    'completion': 'الإكمال',
    'average_quiz_score': 'متوسط درجات الاختبار',
    'time_spent': 'الوقت المستغرق',
    'last_activity': 'آخر نشاط',
    'module_completion': 'إكمال الوحدات',
    'view_detailed_report': 'عرض تقرير التقدم المفصل',
    
    // Learning Path
    'personalized_learning_path': 'مسار التعلم الشخصي',
    'take_assessment': 'خذ هذا التقييم السريع لاكتشاف مسار التعلم الأمثل لك.',
    'customize_experience': 'سنخصص تجربة الدورة بناءً على تفضيلات التعلم الخاصة بك.',
    'generate_path': 'إنشاء مسار التعلم الخاص بي',
    'your_learning_style': 'أسلوب التعلم الخاص بك',
    'recommended_path': 'مسار التعلم الموصى به',
    'retake_assessment': 'إعادة التقييم',
    'start_path': 'بدء هذا المسار',
    
    // Discussion
    'discussion_forum': 'منتدى المناقشة',
    'start_new_thread': 'بدء موضوع جديد',
    'reply': 'الرد',
    'replies': 'الردود',
    'add_reply': 'إضافة رد...',
    'post_reply': 'نشر الرد',
    
    // CTA
    'ready_to_start': 'هل أنت مستعد لبدء رحلة التعلم الخاصة بك؟',
    'join_thousands': 'انضم إلى آلاف الطلاب الذين سجلوا بالفعل في هذه الدورة واتخذ الخطوة التالية في تطوير حياتك المهنية.',
    'contact_admissions': 'التواصل مع القبول',
    
    // Language selector
    'language': 'اللغة',
    'english': 'الإنجليزية',
    'french': 'الفرنسية',
    'arabic': 'العربية',
    
    // Related courses
    'related_courses': 'الدورات ذات الصلة',
    'view_course': 'عرض الدورة',

    // Loading and errors
    'loading_course': 'جاري تحميل معلومات الدورة...',
    'course_not_found': 'الدورة غير موجودة',
    'course_not_exist': 'الدورة التي تبحث عنها غير موجودة أو تمت إزالتها.',
    'browse_all_courses': 'تصفح جميع الدورات',

    // Enrollment form
    'credit_card': 'بطاقة ائتمان',
    'bank_transfer': 'تحويل مصرفي',
    'enrollment_successful': 'تم التسجيل بنجاح! تحقق من بريدك الإلكتروني للتأكيد.',

    // Home Page Hero
    'hero_title': 'أطلق العنان لإمكاناتك مع تعليم عالمي المستوى',
    'hero_title_highlight': 'تعلم بدون حدود',
    'hero_description': 'اكتشف تجربة تعليمية تحويلية مصممة لتمكين حياتك المهنية ونموك الشخصي مع دورات يقودها خبراء وموارد متطورة.',
    'explore_courses': 'استكشاف الدورات',
    'watch_intro': 'مشاهدة المقدمة',
    'students_globally': 'طلاب حول العالم',
    'hero_image_alt': 'طلاب في بيئة تعليمية حديثة',
    'accreditation_title': 'برامج معتمدة بالكامل',
    'accreditation_text': 'جميع دوراتنا معترف بها من قبل أفضل هيئات التعليم الدولية وأصحاب العمل.',
    
    // Featured Courses Section
    'featured_courses': 'الدورات المميزة',
    'featured_courses_description': 'استكشف دوراتنا الأكثر شعبية والأعلى تقييماً في مختلف التخصصات.',
    'all': 'الكل',
    'marketing': 'التسويق',
    'price': 'السعر',
    'view_all_courses': 'عرض جميع الدورات',
    'expand_your_knowledge': 'وسّع معرفتك',
    
    // Testimonials Section
    'testimonials': 'الشهادات',
    'what_students_say': 'ماذا يقول طلابنا',
    'about_us': 'عنا',
    'testimonials_description': 'اكتشف كيف ساعدت برامجنا الطلاب على تحقيق أهدافهم الأكاديمية والمهنية.',
    'join_community': 'انضم إلى مجتمعنا',
    'join_community_description': 'استمتع بتعليم عالمي المستوى وانضم إلى آلاف الخريجين الناجحين في جميع أنحاء العالم.',
    'learn_more': 'معرفة المزيد',
    'students_campus_alt': 'الطلاب في حرمنا الجامعي',
    
    // Call to Action Section
    'cta_title': 'هل أنت مستعد لبدء رحلة التعلم الخاصة بك؟',
    'cta_subtitle': 'انضم إلى مجتمع التعلم العالمي',
    'cta_description': 'اتخذ الخطوة الأولى نحو تحويل حياتك المهنية مع برامجنا التعليمية ذات المستوى العالمي. احصل على توجيه شخصي من خبراء الصناعة.',
    'cta_benefit_1': 'خيارات تعلم مرنة تناسب جدولك الزمني',
    'cta_benefit_2': 'تدريب مهني وإرشاد فردي',
    'cta_benefit_3': 'شهادات معترف بها في الصناعة',
    'cta_benefit_4': 'شبكة عالمية من الخريجين والاتصالات الصناعية',
    'request_info_title': 'طلب المزيد من المعلومات',
    'thank_you': 'شكراً لك!',
    'form_success': 'لقد تلقينا طلبك. سيتصل بك أحد أعضاء فريقنا قريباً.',
    'area_of_interest': 'مجال الاهتمام',
    'select_option': 'حدد خياراً',
    'request_info': 'طلب معلومات',
    'privacy_notice': 'بتقديم هذا النموذج، فإنك توافق على سياسة الخصوصية وشروط الخدمة الخاصة بنا.',
    'join_our_community': 'انضم إلى مجتمعنا',
    'enter_your_name': 'أدخل اسمك الكامل',
    'enter_your_email': 'أدخل عنوان بريدك الإلكتروني',
    'enter_your_phone': 'أدخل رقم هاتفك',
    
    // Stats Section
    'stats_title': 'تأثيرنا بالأرقام',
    'stats_description': 'نحن فخورون بوصولنا العالمي ونجاح طلابنا. إليك لمحة عن تأثيرنا.',
    'stats_courses': 'الدورات المتاحة',
    'stats_students': 'الطلاب المسجلين',
    'stats_countries': 'البلدان الممثلة',
    'stats_satisfaction': 'رضا الطلاب',
    'our_impact': 'تأثيرنا',
    
    // Login and Authentication
    'login_to_your_account': 'تسجيل الدخول إلى حسابك',
    'access_your_courses_and_materials': 'الوصول إلى دوراتك وتتبع تقدمك ومواد التعلم',
    'password': 'كلمة المرور',
    'remember_me': 'تذكرني',
    'forgot_your_password': 'هل نسيت كلمة المرور؟',
    'sign_in': 'تسجيل الدخول',
    'signing_in': 'جاري تسجيل الدخول...',
    'dont_have_account': 'ليس لديك حساب؟ ',
    'create_account': 'إنشاء حساب',
    'back_to_home': 'العودة إلى الصفحة الرئيسية',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
      if (savedLanguage === 'ar') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  }, []);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    
    // Set RTL direction for Arabic
    if (newLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  };

  // Translation function
  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 