from django.contrib import admin
from .models import PdfData

@admin.register(PdfData)
class PdfDataAdmin(admin.ModelAdmin):
    list_display = ('title', 'is_processed', 'uploaded_at')  # 관리자 패널에서 보이는 컬럼
