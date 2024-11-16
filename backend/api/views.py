from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UploadedFile
from .serializers import UploadedFileSerializer

class PdfListView(APIView):
    def get(self, request):
        """PDF 목록 반환"""
        files = UploadedFile.objects.all()  # 모든 파일 가져오기
        serializer = UploadedFileSerializer(files, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class PdfDownloadView(APIView):
    def get(self, request, pk):
        """특정 PDF 파일의 URL 반환"""
        try:
            file = UploadedFile.objects.get(pk=pk)  # 파일 가져오기
            return Response({"file_url": file.file.url}, status=status.HTTP_200_OK)
        except UploadedFile.DoesNotExist:
            return Response({"error": "File not found"}, status=status.HTTP_404_NOT_FOUND)
