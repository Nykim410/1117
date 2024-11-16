from pathlib import Path

import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

MEDIA_URL = '/media/'  # 미디어 파일 URL 경로
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')  # 미디어 파일 저장 디렉토리

# static과 media 설정
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-!n4v!jl&#1#ies)1gqbd33y9s5(ld9hiw+gtqkoj)zf%(y8gq&'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',         # 관리자 페이지
    'django.contrib.auth',          # 인증 시스템
    'django.contrib.contenttypes',  # 컨텐츠 타입
    'django.contrib.sessions',      # 세션 관리
    'django.contrib.messages',      # 메시지 프레임워크
    'django.contrib.staticfiles',   # 정적 파일 관리
    'rest_framework',               # Django REST Framework
    'corsheaders',                  # CORS 처리
    'api',                          # API 앱
]


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',  # 보안 미들웨어
    'django.contrib.sessions.middleware.SessionMiddleware',  # 세션 관리
    'django.middleware.common.CommonMiddleware',  # 공통 미들웨어
    'django.middleware.csrf.CsrfViewMiddleware',  # CSRF 보호
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # 인증
    'django.contrib.messages.middleware.MessageMiddleware',  # 메시지 프레임워크
    'corsheaders.middleware.CorsMiddleware',  # CORS 미들웨어
]





ROOT_URLCONF = 'myproject.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'frontend', 'dist')],  # React 빌드 파일 경로
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]





WSGI_APPLICATION = 'myproject.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases


# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/

STATIC_URL = '/static/'

# STATICFILES_DIRS에 React의 빌드 파일 경로 추가
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend', 'dist'),
]

# STATIC_ROOT 설정 (배포 시 정적 파일을 모으는 위치)
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')



# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CORS 설정 (React에서 Django API 호출 허용)
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # React 개발 서버 주소
]