import mariadb
import os
from dotenv import load_dotenv

load_dotenv()

class MariaDB:

  def __init__(self):
    self._host = os.getenv("HOST")
    self._username = os.getenv("USERNAME")
    self._passwd = os.getenv("PASSWD")
    self._database = os.getenv("DATABASE")
    self._conn = None

  def _connecting(self):
    return mariadb.connect(
      user=self._username,
      password=self._username,
      host=self._host,
      database=self._database
    )

  