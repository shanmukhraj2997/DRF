from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.exceptions import TokenError

class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        """
        If the token does not exist or is invalid, the request.user will be set to AnonymousUser.
        This class should not block unprotected endpoints with a token_invalid error.
        Returns:
            - user: User Object (request.user)
            - validated_token: Validated token (request.auth)
        """
        token = request.COOKIES.get("access_token")
        if not token:
            return None

        try:
            validated_token = self.get_validated_token(token)
            user = self.get_user(validated_token)
            return user, validated_token
        except TokenError:
            return None
