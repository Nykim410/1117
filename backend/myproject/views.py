from rest_framework.views import APIView
from rest_framework.response import Response
from .models import PdfData

class PdfListView(APIView):
    def get(self, request):
        pdfs = PdfData.objects.all()
        pdf_list = [
            {
                "id": pdf.id,
                "title": pdf.title,
                "file_url": pdf.file.url,
                "is_processed": pdf.is_processed,
                "uploaded_at": pdf.uploaded_at,
            }
            for pdf in pdfs
        ]
        return Response(pdf_list, status=200)
