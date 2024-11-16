from django.db import models

class PdfData(models.Model):
    title = models.CharField(max_length=255)  # PDF 제목
    file = models.FileField(upload_to='uploads/')  # 업로드된 파일 경로
    is_processed = models.BooleanField(default=False)  # 처리 여부
    uploaded_at = models.DateTimeField(auto_now_add=True)  # 업로드 시간

    def __str__(self):
        return self.title

