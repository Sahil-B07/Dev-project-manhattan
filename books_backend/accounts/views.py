from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics, status
from .serializers import CustomUserGenrePreferencesSerializer, CustomUserSerializer

class UserRegisterView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


from .serializers import CustomUserGenrePreferencesSerializer

class CustomUserGenrePreferencesUpdateView(generics.RetrieveUpdateAPIView):
    serializer_class = CustomUserGenrePreferencesSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
