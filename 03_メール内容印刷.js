function runPrintMails() {
  try {
    Logger.log("-----メール印刷処理を開始します-----");
    var CONFIG = [ CONFIG_NARIKURA_KURUMESHI];
    CommonLib.printMails(CONFIG);
    Logger.log("-----メール印刷処理が完了しました-----");

  } catch (e) {
    Logger.log("⚠️メール印刷処理でエラーが発生しました: " + e.message);
    Logger.log("エラー詳細: " + e.stack);
    throw e;
  }
}
